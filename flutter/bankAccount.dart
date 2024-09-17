class BankAccount {
  BankAccount({
    // constructors
    required this.accountHolder,
    this.balance = 0,
  });
  final String accountHolder;
  double balance;

// class instance methods
  void deposit(double amount) {
    balance += amount;
  }

  bool withdraw(double amount) {
    if (balance > amount) {
      balance -= amount;
      return true;
    } else {
      return false;
    }
  }
}

void main() {
  final bankAccount = BankAccount(accountHolder: 'Andrea', balance: 100);
  print(bankAccount.balance);
}
