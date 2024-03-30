terraform {
  required_providers {
    google = {
      source  = "hashicorp/google"
      version = "5.22.0"
    }
  }
}

provider "google" {
  project = "terraform-seminar1"
  region  = "us-central1"
}

resource "google_compute_network" "vpc_network" {
  name = "my-first-network"
}

# part 2, step 8:

resource "google_compute_instance" "vm_instance" {
  name         = "my-first-vm"
  machine_type = "f1-micro"
  zone         = "us-central1-c"

  boot_disk {
    initialize_params {
      image = "debian-cloud/debian-11"
    }
  }

  network_interface {
    network = google_compute_network.vpc_network.name
    access_config {
    }
  }
}

# part 3, storage bucket

resource "google_storage_bucket" "storage_bucket" {
  name          = "my-first-bucket-ashton-sicard"
  location      = "US"
  force_destroy = true

  lifecycle_rule {
    condition {
      age = 1
    }
    action {
      type = "AbortIncompleteMultipartUpload"
    }
  }
}

# part 4, firewall

resource "google_compute_firewall" "google_firewall" {
  name    = "test-firewall"
  network = google_compute_network.vpc_network.name

  allow {
    protocol = "icmp"
    
  }

  allow {
    protocol = "tcp"
    ports    = ["80", "8080", "1000-2000", "22"]
  }
  source_ranges = [ "0.0.0.0/0" ]

}