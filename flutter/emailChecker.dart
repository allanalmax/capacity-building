void main() {
  const emails = [
    'abc@abc.com',
    'me@example.com',
    'johndoe@gmail.com',
    'katy@yahoo.com',
  ];

  const knownDomains = ['gmail.com', 'yahoo.com'];
  final unknownDomains = emails
      .map((email) => email.split('@').last)
      .where((domain) => !knownDomains.contains(domain));
  print(unknownDomains);
}