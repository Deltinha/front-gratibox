import faker from 'faker';

describe('Register', () => {
  const email = faker.internet.email();
  it('Should register successfully', () => {
    cy.visit('http://localhost:3000');

    const password = faker.internet.password();

    cy.contains('Quero começar').click();
    cy.get('input[type=text]').type(faker.name.firstName());
    cy.get('input[type=email').type(email);
    cy.get('input[placeholder*="Senha (entre 8 e 16 dígitos)"]').type(password);
    cy.get('input[placeholder*="Confirmar senha"]').type(password);
    cy.contains('Cadastrar').click();

    cy.url().should('equal', 'http://localhost:3000/login');
  });

  it('Should alert if email is already in use', () => {
    cy.visit('http://localhost:3000');

    const password = faker.internet.password();

    cy.contains('Quero começar').click();
    cy.get('input[type=text]').type(faker.name.firstName());
    cy.get('input[type=email').type(email);
    cy.get('input[placeholder*="Senha (entre 8 e 16 dígitos)"]').type(password);
    cy.get('input[placeholder*="Confirmar senha"]').type(password);
    cy.contains('Cadastrar').click();
    cy.contains('Este email já está sendo usado');
    cy.contains('OK').click();
  });

  it('Should alert if the given passwords aren`t equal', () => {
    cy.visit('http://localhost:3000');

    cy.contains('Quero começar').click();
    cy.get('input[type=text]').type(faker.name.firstName());
    cy.get('input[type=email').type(faker.internet.email());
    cy.get('input[placeholder*="Senha (entre 8 e 16 dígitos)"]').type(
      faker.internet.password()
    );
    cy.get('input[placeholder*="Confirmar senha"]').type(
      faker.internet.password()
    );
    cy.contains('Cadastrar').click();
    cy.contains('As senhas inseridas são diferentes');
    cy.contains('OK').click();
  });
});
