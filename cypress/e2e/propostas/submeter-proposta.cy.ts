import { toCyString } from "../../helpers/kebab.helper";

describe("Submissão de proposta no sistema", () => {

  beforeEach(() => {
    cy.fixture("submeter-proposta")
    .as("dados")
    .then((dados) => {
      cy.typeLogin(dados.email, dados.senha);
    });
  });

  context("Submissão de proposta com dados válidos", () => {

    it("Preencher as informações iniciais da proposta", () => {
      cy.fixture("submeter-proposta").then((dados) => {
        cy.get('[data-cy="editais-ver-mais"]').click();
        cy.get(':nth-child(6) > .css-1g8exof > .css-qvg66t').click();
        cy.get('[class="css-1dimcyp e19ekcfn59"]').contains("Edital 2026-0001 Sig Cypress").should("be.visible");
        cy.get('[data-cy="criar-proposta"]').click();
        cy.get('[data-cy="titulo"]').type(dados.tituloProposta);
        cy.get('[data-cy="tipo-evento-id"]').click();
        cy.get('[data-cy="workshop"]').click();
        cy.get('[data-cy="search-estado-execucao-evento"]').click();
        cy.get('[data-cy="mato-grosso-do-sul"]').click();
        cy.get('[data-cy="search-municipio-execucao-evento"]').click();
        cy.get('[data-cy="campo-grande"]').click();
        cy.get('[data-cy="duracao"]').clear().type(dados.duracaoProposta);
        cy.get('[data-cy="instituicao-executora-id"]').click();
        cy.get('[data-cy="funda-fundacao"]').click();
        cy.get('[data-cy="unidade-executora-id"]').click();
        cy.get('[data-cy="ms-ufms"]').click();
        cy.get('[data-cy="add-areas-de-conhecimento"]').click();
        cy.get('[data-cy="grande-area-id"]').click();
        cy.get('[data-cy="ciencias-agrarias"]').click();
        cy.get('[data-cy="area-id"').click();
        cy.get('[data-cy="agronomia"]').click();
        cy.get('[data-cy="sub-area-id"]').click();
        cy.get('[data-cy="floricultura-parques-e-jardins"]').click();
        cy.get('[data-cy="especialidade-id"]').click();
        cy.get('[data-cy="floricultura"]').click();
        cy.get('[data-cy="areaDeConhecimento-confirmar"]').click();
        cy.wait(500);
        cy.get('[data-cy="menu-salvar"]').click();
        cy.wait(500);
        cy.get('[data-cy="next-button"]').click();
      });
    });

  it("Preencher as informações complementares da proposta", () => {
    cy.fixture("submeter-proposta").then((dados) => {
      cy.get('[data-cy="projetos-ver-mais"]').click();
      cy.get(':nth-child(2) > .css-k9f5ec > .css-kbi0st > .css-xb68j8 > .css-vsxyhc > :nth-child(2)').click();
      cy.get('[data-cy="informacoes-complementares"]').click();
        cy.get('[data-cy="formularioPropostaInformacaoComplementar.pergunta-218-item-mei-faturamento-ano-de-ate-r-81"]').click();
        cy.get('[data-cy="formularioPropostaInformacaoComplementar.pergunta-219"]').type(dados.descricaoProposta);
      cy.wait(500);
      cy.get('[data-cy="menu-salvar"]').click();
      cy.wait(500);
      cy.get('[data-cy="next-button"]').click();
    });
  });
  
  it("Preencher a abrangência da proposta", () => {
    cy.fixture("submeter-proposta").then((dados) => {
      cy.get('[data-cy="projetos-ver-mais"]').click();
      cy.get(':nth-child(2) > .css-k9f5ec > .css-kbi0st > .css-xb68j8 > .css-vsxyhc > :nth-child(2)').click();
      cy.get('[data-cy="abrangencia"]').click();
      cy.get('[data-cy="add-button"]').click();
        cy.get('[data-cy="estado-id"]').click();
        cy.get('[data-cy="mato-grosso-do-sul"]').click();
        cy.get('[data-cy="abrangencia-municipio"]').click();
        cy.get('[data-cy="angelica"]').click().blur();
        cy.get('[data-cy="abrangencia-confirmar"]').click();
      cy.get('[data-cy="add-button"]').click();
        cy.get('[data-cy="estado-id"]').click();
        cy.get('[data-cy="mato-grosso-do-sul"]').click();
        cy.get('[data-cy="abrangencia-municipio"]').click();
        cy.get('[data-cy="campo-grande"]').click().blur();
        cy.get('[data-cy="abrangencia-confirmar"]').click();
      cy.wait(500);
      cy.get('[data-cy="menu-salvar"]').click();
      cy.wait(500);
      cy.get('[data-cy="next-button"]').click();
    });
  });

  it("Preencher os dados pessoais na proposta", () => {
    cy.fixture("submeter-proposta").then((dados) => {
      cy.get('[data-cy="projetos-ver-mais"]').click();
      cy.get(':nth-child(2) > .css-k9f5ec > .css-kbi0st > .css-xb68j8 > .css-vsxyhc > :nth-child(2)').click();
      cy.get('[data-cy="coordenacao"]').click();
      cy.get('[data-cy="dados-pessoais"]').click();
      cy.wait(500);
      cy.get('[data-cy="menu-salvar"]').click();
      cy.wait(500);
      cy.get('[data-cy="next-button"]').click();
    });
  });

  it("Preencher o endereço na proposta", () => {
    cy.fixture("submeter-proposta").then((dados) => {
      cy.get('[data-cy="projetos-ver-mais"]').click();
      cy.get(':nth-child(2) > .css-k9f5ec > .css-kbi0st > .css-xb68j8 > .css-vsxyhc > :nth-child(2)').click();
      cy.get('[data-cy="coordenacao"]').click();
      cy.get('[data-cy="endereco"]').click();
      cy.wait(500);
      cy.get('[data-cy="menu-salvar"]').click();
      cy.wait(500);
      cy.get('[data-cy="next-button"]').click();
    });
  });
      
  it("Preencher os dados acadêmicos na proposta", () => {
    cy.fixture("submeter-proposta").then((dados) => {
      cy.get('[data-cy="projetos-ver-mais"]').click();
      cy.get(':nth-child(2) > .css-k9f5ec > .css-kbi0st > .css-xb68j8 > .css-vsxyhc > :nth-child(2)').click();
      cy.get('[data-cy="coordenacao"]').click();
      cy.get('[data-cy="dados-academicos"]').click();
      cy.wait(500);
      cy.get('[data-cy="menu-salvar"]').click();
      cy.wait(500);
      cy.get('[data-cy="next-button"]').click();
    });
  });

  it("Preencher os dados profissionais na proposta", () => {
    cy.fixture("submeter-proposta").then((dados) => {
      cy.get('[data-cy="projetos-ver-mais"]').click();
      cy.get(':nth-child(2) > .css-k9f5ec > .css-kbi0st > .css-xb68j8 > .css-vsxyhc > :nth-child(2)').click();
      cy.get('[data-cy="coordenacao"]').click();
      cy.get('[data-cy="dados-profissionais"]').click();
      cy.wait(500);
      cy.get('[data-cy="menu-salvar"]').click();
      cy.wait(500);
      cy.get('[data-cy="next-button"]').click();
    });
  });
    
  it("Preencher a descrição de apresentação da proposta", () => {
    cy.fixture("submeter-proposta").then((dados) => {
      cy.get('[data-cy="projetos-ver-mais"]').click();
      cy.get(':nth-child(2) > .css-k9f5ec > .css-kbi0st > .css-xb68j8 > .css-vsxyhc > :nth-child(2)').click();
      cy.get('[data-cy="apresentacao"]').click();
      cy.get('[data-cy="descricao"]').click();
        cy.get('[data-cy="formularioPropostaDescritiva.pergunta-221-item-opcao-1"]').click();
        cy.get('[data-cy="formularioPropostaDescritiva.pergunta-222"]').type(dados.valorTextoGenerico);
      cy.wait(500);
      cy.get('[data-cy="menu-salvar"]').click();
      cy.wait(500);
      cy.get('[data-cy="next-button"]').click();
    });
  });

  it("Preencher os indicadores de produção da proposta", () => {
    cy.fixture("submeter-proposta").then((dados) => {
      cy.get('[data-cy="projetos-ver-mais"]').click();
      cy.get(':nth-child(2) > .css-k9f5ec > .css-kbi0st > .css-xb68j8 > .css-vsxyhc > :nth-child(2)').click();
      cy.get('[data-cy="apresentacao"]').click();
      cy.get('[data-cy="indicadores-de-producao"]').click();
        cy.get(':nth-child(1) > .css-1j6d2zt > :nth-child(1)').type(dados.outroValorQuantidade);
        cy.get(':nth-child(3) > .css-1j6d2zt > :nth-child(2)').type(dados.outroValorQuantidade);
        cy.get(':nth-child(9) > .css-1j6d2zt > :nth-child(1)').type(dados.outroValorQuantidade);
        cy.get(':nth-child(9) > .css-1j6d2zt > :nth-child(2)').type(dados.outroValorQuantidade);
      cy.wait(500);
      cy.get('[data-cy="menu-salvar"]').click();
      cy.wait(500);
      cy.get('[data-cy="next-button"]').click();
    });
  });
  
  it("Informar os membros participantes da proposta", () => {
    cy.fixture("submeter-proposta").then((dados) => {
      cy.get('[data-cy="projetos-ver-mais"]').click();
      cy.get(':nth-child(2) > .css-k9f5ec > .css-kbi0st > .css-xb68j8 > .css-vsxyhc > :nth-child(2)').click();
      cy.get('[data-cy="apresentacao"]').click();
      cy.get('[data-cy="membros"]').click();
        cy.get('[data-cy="nome-do-pesquisador"]').type(dados.nomePesquisador);
        cy.wait(500);
        cy.get('[id="autocomplete-1-listbox"]').contains(dados.nomePesquisador).click().blur();
        cy.get('[type="button"]').contains("Adicionar").click();
        cy.get('[data-cy="nao-button"]').click();
      cy.wait(500);
      cy.get('[data-cy="menu-salvar"]').click();
      cy.wait(500);
      cy.get('[data-cy="next-button"]').click();
    });
  });

  it("Preencher as atividades da proposta", () => {
    cy.fixture("submeter-proposta").then((dados) => {
      cy.get('[data-cy="projetos-ver-mais"]').click();
      cy.get(':nth-child(2) > .css-k9f5ec > .css-kbi0st > .css-xb68j8 > .css-vsxyhc > :nth-child(2)').click();
      cy.get('[data-cy="apresentacao"]').click();
      cy.get('[data-cy="atividades"]').click();
        cy.get('[data-cy="add-button"]').click();
        cy.get('[data-cy="propostaAtividadeForm.titulo"]').type(dados.tituloAtividade);
        cy.get('[data-cy="propostaAtividadeForm.descricao"]').type(dados.valorTextoGenerico);
        cy.get('[data-cy="search-mes-inicio"]').click();
        cy.get('[data-cy="7"]').click();
        cy.get('[data-cy="search-duracao"]').click();
        cy.get('[data-cy="4-meses"]').click();
        cy.get('[data-cy="search-carga-horaria-semanal"]').click();
        cy.get('[data-cy="4-horas"]').click();
        cy.get('[data-cy="propostaAtividade-confirmar"]').click();
      cy.wait(500);
      cy.get('[data-cy="menu-salvar"]').click();
      cy.wait(500);
      cy.get('[data-cy="next-button"]').click();
    });
  });

  it("Visualizar as atividades da proposta", () => {
    cy.fixture("submeter-proposta").then((dados) => {
      cy.get('[data-cy="projetos-ver-mais"]').click();
      cy.get(':nth-child(2) > .css-k9f5ec > .css-kbi0st > .css-xb68j8 > .css-vsxyhc > :nth-child(2)').click();
      cy.get('[data-cy="apresentacao"]').click();
      cy.get('[data-cy="visualizacao-das-atividades"]').click();
      cy.wait(500);
      cy.get('[data-cy="menu-salvar"]').click();
      cy.wait(500);
      cy.get('[data-cy="next-button"]').click();
    });
  });

  it("Determinar a faixa de financiamento da proposta", () => {
    cy.fixture("submeter-proposta").then((dados) => {
      cy.get('[data-cy="projetos-ver-mais"]').click();
      cy.get(':nth-child(2) > .css-k9f5ec > .css-kbi0st > .css-xb68j8 > .css-vsxyhc > :nth-child(2)').click();
      cy.get('[data-cy="apresentacao"]').click();
      cy.get('[data-cy="orcamento"]').click();
      cy.get('[data-cy="faixa-de-financiamento"]').click();
        cy.get('[data-cy="search-faixa-financiamento-id"]').click();
        cy.get('[data-cy="faixa-b-r-10-000-01-r-25-000-00"]').click();
      cy.wait(500);
      cy.get('[data-cy="menu-salvar"]').click();
      cy.wait(500);
      cy.get('[data-cy="next-button"]').click();
    });
  });
  
  it("Visualizar serviços de terceiros da proposta", () => {
    cy.fixture("submeter-proposta").then((dados) => {
      cy.get('[data-cy="projetos-ver-mais"]').click();
      cy.get(':nth-child(2) > .css-k9f5ec > .css-kbi0st > .css-xb68j8 > .css-vsxyhc > :nth-child(2)').click();
      cy.get('[data-cy="apresentacao"]').click();
      cy.get('[data-cy="orcamento"]').click();
      cy.get('[data-cy="servicos-de-terceiros"]').click();
      cy.wait(500);
      cy.get('[data-cy="menu-salvar"]').click();
      cy.wait(500);
      cy.get('[data-cy="next-button"]').click();
    });
  });

  it("Preencher informações de bolsa da proposta", () => {
    cy.fixture("submeter-proposta").then((dados) => {
      cy.get('[data-cy="projetos-ver-mais"]').click();
      cy.get(':nth-child(2) > .css-k9f5ec > .css-kbi0st > .css-xb68j8 > .css-vsxyhc > :nth-child(2)').click();
      cy.get('[data-cy="apresentacao"]').click();
      cy.get('[data-cy="orcamento"]').click();
      cy.get('[data-cy="bolsa"]').click();
      cy.get('[data-cy="add-button"]').click();
        cy.get('[data-cy="search-modalidade-bolsa-id"]').click();
        cy.get('[data-cy="at"]').click();
        cy.get('[data-cy="search-nivel-bolsa-id"]').click();
        cy.get('[data-cy="ns-r-770-00"]').click();
        cy.get('[data-cy="rubricaBolsaForm.quantidade"]').type(dados.valorQuantidade);
        cy.get('[data-cy="search-duracao"]').click();
        cy.get('[data-cy="5"]').click();
        cy.get('[data-cy="rubricaBolsa-confirmar"]').click();
      cy.wait(500);
      cy.get('[data-cy="menu-salvar"]').click();
      cy.wait(500);
      cy.get('[data-cy="next-button"]').click();
    });
  });

  it("Visualizar consolidação da proposta", () => {
    cy.fixture("submeter-proposta").then((dados) => {
      cy.get('[data-cy="projetos-ver-mais"]').click();
      cy.get(':nth-child(2) > .css-k9f5ec > .css-kbi0st > .css-xb68j8 > .css-vsxyhc > :nth-child(2)').click();
      cy.get('[data-cy="apresentacao"]').click();
      cy.get('[data-cy="orcamento"]').click();
      cy.get('[data-cy="consolidacao"]').click();
      cy.wait(500);
      cy.get('[data-cy="menu-salvar"]').click();
      cy.wait(500);
      cy.get('[data-cy="next-button"]').click();
    });
  });

  it("Visualizar o que foi solicitado à fundação sobre a proposta", () => {
    cy.fixture("submeter-proposta").then((dados) => {
      cy.get('[data-cy="projetos-ver-mais"]').click();
      cy.get(':nth-child(2) > .css-k9f5ec > .css-kbi0st > .css-xb68j8 > .css-vsxyhc > :nth-child(2)').click();
      cy.get('[data-cy="apresentacao"]').click();
      cy.get('[data-cy="orcamento"]').click();
      cy.get('[data-cy="solicitado-a-fundacao"]').click();
      cy.wait(500);
      cy.get('[data-cy="menu-salvar"]').click();
      cy.wait(500);
      cy.get('[data-cy="next-button"]').click();
    });
  });
  
  it("Anexar arquivos de documentos pessoais na proposta", () => {
    cy.fixture("submeter-proposta").then((dados) => {
      cy.get('[data-cy="projetos-ver-mais"]').click();
      cy.get(':nth-child(2) > .css-k9f5ec > .css-kbi0st > .css-xb68j8 > .css-vsxyhc > :nth-child(2)').click();
      cy.get('[data-cy="anexos"]').click();
      cy.get('[data-cy="documentos-pessoais"]').click();
      cy.wait(500);
      cy.get('[data-cy="menu-salvar"]').click();
      cy.wait(500);
      cy.get('[data-cy="next-button"]').click();
    });
  });
  
  it("Anexar arquivo de carta de apresentação da proposta", () => {
    cy.fixture("submeter-proposta").then((dados) => {
      cy.get('[data-cy="projetos-ver-mais"]').click();
      cy.get(':nth-child(2) > .css-k9f5ec > .css-kbi0st > .css-xb68j8 > .css-vsxyhc > :nth-child(2)').click();
      cy.get('[data-cy="anexos"]').click();
      cy.get('[data-cy="documentos-da-proposta"]').click();
        cy.get('[data-cy="select-categories-documento-prop"]').click();
        cy.get('[data-cy="carta-de-apresentacao"]').click();
        cy.get('[data-cy="documentoPropostaAnexo-upload"]')
          .selectFile(dados.arquivoPDF, {force: true});
      cy.wait(500);
      cy.get('[data-cy="menu-salvar"]').click();
      cy.wait(500);
      cy.get('[data-cy="next-button"]').click();
    });
  });

  it("Visualizar a proposta", () => {
    cy.fixture("submeter-proposta").then((dados) => {
      cy.get('[data-cy="projetos-ver-mais"]').click();
      cy.get(':nth-child(2) > .css-k9f5ec > .css-kbi0st > .css-xb68j8 > .css-vsxyhc > :nth-child(2)').click();
      cy.get('[data-cy="finalizacao"]').click();
      cy.get('[data-cy="visualizacao-da-proposta"]').click();
      cy.wait(500);
      cy.get('[data-cy="menu-salvar"]').click();
      cy.wait(500);
      cy.get('[data-cy="next-button"]').click();
    });
  });

   it("Aceitar termos, verificar pêndencias e submeter a proposta", () => {
    cy.fixture("submeter-proposta").then((dados) => {
      cy.get('[data-cy="projetos-ver-mais"]').click();
      cy.get(':nth-child(2) > .css-k9f5ec > .css-kbi0st > .css-xb68j8 > .css-vsxyhc > :nth-child(2)').click();
      cy.get('[data-cy="finalizacao"]').click();
      cy.get('[data-cy="termo-de-aceite"]').click();
      cy.get('[data-cy="termo-de-aceite-aceito-box"]').click();
      cy.get('[data-cy="menu-verificar-pendencias"]').click();
      cy.wait(500);
      cy.get('[data-cy="menu-salvar"]').click();
      cy.wait(500);
      cy.get('[class="css-1alpf6f ebva1ex2"]').contains('Submeter proposta').click();
      //cy.get('[data-cy="sim-continuar-button"]').click();
      //cy.get('[data-cy="confirmar-button"]').click();
      //cy.get('[data-cy="user-menu"]').should("be.visible");
      });
    });
  });
});
