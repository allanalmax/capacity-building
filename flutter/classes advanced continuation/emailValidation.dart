class EmailAddress {
  EmailAddress(this.email) {
    if (email.isEmpty) {
      throw new FormatException("Email address cannot be null");
    }
    if (!email.contains('@')) {
      throw new FormatException("Email address must contain '@' symbol");
    }
  }
  final String email;

  @override
  String toString() => email;
}

void main() {
  try {
    print(EmailAddress('me@example.com'));
    print(EmailAddress('example.com'));
    print(EmailAddress(''));
  } on FormatException catch (e) {
    print(e);
  }
}