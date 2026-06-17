describe("[F-03] Cadastro Completo de Usuários", () => {

  beforeEach(() => {
    // Realizar login e acessar pagina de edição de perfil
    cy.fixture("completar-cadastro")
      .as("dados")
      .then((dados) => {
        cy.typeLogin(dados.email, dados.senha);
        cy.get('[data-cy="user-menu"]').click();
        cy.get('[data-cy="editar-perfil"]').click();
      });
  });

  context("[CT-SIG-CADASTRO-003] Cadastro Completo - Caminho Feliz", () => {

    it("Preencher os campos de Endereço", () => {
      cy.fixture("completar-cadastro").then((dados) => {
        cy.get('[data-cy="endereco"]').click();
        cy.get('[data-cy="endereco.cep"]').clear().type(dados.cep);
        //cy.get('[data-cy="endereco.logradouro"]').should("not.have.value", "");
        cy.get('[data-cy="endereco.numero"]').clear().type(dados.numero);
        cy.get('[data-cy="menu-salvar"]').click();
      });
    });

    it("Preencher os campos de Dados Acadêmicos", () => {
      cy.fixture("completar-cadastro").then((dados) => {
        cy.get('[data-cy="dados-academicos"]').click();
        cy.get('[data-cy="search-instituicao-id"]').clear().type(dados.instituicao);
        cy.get('[role="option"]').first().click({ force: true });

        cy.get('[data-cy="search-unidade-id"]').clear().type(dados.unidade);
        cy.get('[role="option"]').first().click({ force: true });

        cy.get('[data-cy="search-nivel-academico-id"]').clear().type(dados.nivelAcademico);
        cy.get('[role="option"]').first().click({ force: true });

        cy.get('[data-cy="lattes"]').clear().type(dados.lattes);
        cy.get('[data-cy="linkedin"]').clear().type(dados.linkedin);

        cy.get('[data-cy="add-areas-de-conhecimento"]').click();

        cy.get('[data-cy="search-grande-area-id"]').clear().type(dados.grandeArea);
        cy.get('[role="option"]').first().click({ force: true });
        cy.get('[data-cy="search-grande-area-id"]').type("{enter}");

        cy.get('[data-cy="search-area-id"]').clear().type(dados.area);
        cy.get('[role="option"]').first().click({ force: true });
        cy.get('[data-cy="search-area-id"]').type("{enter}");

        cy.get('[id="search-sub-area-id"]').clear().type(dados.subArea);
        cy.get('[role="option"]').first().click({ force: true });
        cy.get('[id="search-sub-area-id"]').type("{enter}");

        cy.get('[data-cy="search-especialidade-id"]').clear().type(dados.especialidade);
        cy.get('[role="option"]').first().click({ force: true });
        cy.get('[data-cy="search-especialidade-id"]').type("{enter}");

        cy.get('[data-cy="areaDeConhecimento-confirmar"]').click();
        cy.get('[data-cy="menu-salvar"]').click();
      });
    });

    it("Preencher os campos de Dados Profissionais", () => {
      cy.fixture("completar-cadastro").then((dados) => {
        cy.get('[data-cy="dados-profissionais"]').click();
        cy.wait(300);
        cy.get('[data-cy="possui-vinculo-institucional"]').check({ force: true });

        cy.get('[data-cy="search-tipo-vinculo-instituciona"]').clear().type(dados.tipoVinculo);
        cy.get('[role="option"]').first().click({ force: true });

        cy.get('[data-cy="vinculoInstitucional.inicioServico"]').clear().type(dados.inicioServico);

        cy.get('[data-cy="search-regime-trabalho-id"]').clear().type(dados.regimeTrabalho);
        cy.get('[role="option"]').first().click({ force: true });

        cy.get('[data-cy="vinculoInstitucional.funcao"]').clear().type(dados.funcao);
        cy.get('[data-cy="vinculoInstitucional.inicioFuncao"]').clear().type(dados.inicioFuncao);

        cy.get('[data-cy="menu-salvar"]').click();
      });
    });

    it("Realizar o upload de Documentos Pessoais e finalizar", () => {
        cy.fixture("completar-cadastro").then((dados) => {
        cy.get('[data-cy="documentos-pessoais"]').click();
        cy.get('[data-cy="open-select-categories-usuario-a"]').click();
        cy.get('[data-cy="documento-de-identificacao-com-f"]').click();
        cy.get('[data-cy="usuarioAnexo-upload"]').should('exist').selectFile(`cypress/fixtures/${dados.documentoIdentificacao}`, { force: true });
        cy.contains(dados.documentoIdentificacao).should("be.visible");
        cy.get('[data-cy="menu-finalizar"]').click();
      });
    });
  });
});
