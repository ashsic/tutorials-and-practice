#include <iostream>
#include "io.h"

int readNumber() {
  std::cout << "Enter an integer: ";
  int input{};
  std::cin >> input;
  return input;
}

void writeAnswer(int output) {
  std::cout << "The answer is: " << output;
}