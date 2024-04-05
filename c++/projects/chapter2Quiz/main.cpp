#include <iostream>
#include "io.h"

int main() {
  std::cout << "Enter two integers to get their sum.\n";

  int num1{ readNumber() };
  int num2{ readNumber() };

  int sum {num1 + num2};

  writeAnswer(sum);
  return 0;
}