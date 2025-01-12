Feature: Busca de produto e adição ao carrinho

  Scenario: Usuário busca um produto e adiciona ao carrinho
    Given que o usuário está na página inicial
    When o usuário busca pelo produto "Mouse"
    Then o produto "Mouse" é exibido na lista de resultados
    And o produto é adicionado ao carrinho
    And o carrinho exibe o produto corretamente na tela de pagamento
