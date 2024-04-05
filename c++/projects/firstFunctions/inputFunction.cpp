#include <iostream>

int getValue() {
  int num{};
  std::cout << "Enter an integer: ";
  std::cin >> num;
  return num;
}

int main() {
  int num { getValue() };
  std::cout << "Double the integer is " << 2 * num + "/n";
  return 0;
}