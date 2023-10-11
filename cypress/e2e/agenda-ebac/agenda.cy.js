/// <reference types="cypress" />

describe('Teste de funcionalidades da agenda', () => {
    it('Testa a inclusão de um contato', () => {
    cy.visit('https://agenda-contatos-react.vercel.app/');
    cy.get('[type="text"]').type('João da Silva');
    cy.get('[type="tel"]').type('(11) 99999-9999');
    cy.get('[type="email"]').type('joao.silva@gmail.com');
    cy.get('.adicionar').click();
    cy.contains('João da Silva');
    });

    it('Testa a alteração de um contato', () => {
    cy.visit('https://agenda-contatos-react.vercel.app/');
    cy.get('[type="text"]').type('João da Silva');
    cy.get('[type="tel"]').type('(11) 99999-9999');
    cy.get('[type="email"]').type('joao.silva@gmail.com');
    cy.get('.adicionar').click();
    cy.contains('João da Silva').click();
    cy.get('.edit', { multiple: true }).each(($el) => {
        cy.wrap($el).click()
    })
    cy.get('[type="text"]').clear().type('João da Silva Santos');
    cy.get('[type="tel"]').clear().type('(11) 88888-8888');
    cy.get('[type="email"]').clear().type('joao.silva.santos@gmail.com');
    cy.get('.alterar').click();
    cy.contains('João da Silva Santos');
    });

    it('Testa a remoção de um contato', () => {
            cy.visit('https://agenda-contatos-react.vercel.app/');
            cy.contains('João da Silva Santos').parent().find('.delete').click()
            cy.contains('João da Silva Santos').should('not.exist');
        });
})

