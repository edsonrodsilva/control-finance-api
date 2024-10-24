# O projeto

O projeto será um sistema financeiro completo e integrado, com diversos módulos para gerenciar diferentes aspectos das finanças pessoais dos usuários. Ele contará com as seguintes funcionalidades principais:

### Módulo de Usuários

O sistema permitirá o cadastro e autenticação de usuários, com opções de recuperação de senha e autenticação em dois fatores via Google Authenticator. Cada usuário poderá visualizar, editar e excluir seu perfil, além de alterar suas informações de e-mail e senha.

### Módulo de Lançamentos Financeiros

Os usuários poderão cadastrar, editar e remover lançamentos financeiros, classificando-os em receitas ou despesas, com suporte à categorização e subcategorização detalhada. O sistema permitirá a filtragem por data, categoria, tipo de despesa, e controle de pagamentos. Cada lançamento terá informações detalhadas e ticket de pagamento confirmado.

### Módulo de Investimentos

O sistema permitirá a gestão de investimentos, incluindo cadastro, edição, remoção e consulta de detalhes como rendimento e data de aplicação. Haverá cálculo automático do rendimento acumulado das aplicações.

### Módulo de Patrimônio

Os usuários poderão gerenciar seus bens patrimoniais, como imóveis e veículos, cadastrando, editando e removendo esses bens. O valor total do patrimônio será atualizado automaticamente conforme as modificações, e o valor de mercado dos bens poderá ser ajustado.

### Módulo de Dívidas

Este módulo será responsável pelo controle de dívidas, permitindo o cadastro, edição e remoção de dívidas como empréstimos e financiamentos. O saldo devedor será calculado automaticamente com base nas parcelas pagas e futuras, com exibição de cronograma de pagamento.

### Módulo de Projetos

O sistema também suportará a criação e gestão de projetos financeiros, como viagens ou reformas, casamento. Os usuários poderão definir metas financeiras e acompanhar o progresso de cada projeto em relação à meta estipulada.

### Módulo de Reserva Financeira e Aposentadoria

Os usuários poderão gerenciar reservas financeiras, com cálculos automáticos do valor acumulado, além de planejar a aposentadoria, incluindo simulações de contribuições e rendimentos estimados.

### Módulo de Movimentações de Caixa

O sistema permitirá o registro e categorização de entradas e saídas de caixa, com exibição de saldo atualizado em tempo real, oferecendo uma visão precisa das movimentações financeiras diárias.

### Módulo de Orçamento

Cada usuário poderá definir orçamentos mensais para diferentes categorias de despesas, com alertas automáticos quando o orçamento for excedido, e relatórios comparativos mensais para acompanhar o desempenho.

### Módulo de Dashboard

O painel de controle consolidará todas as informações financeiras do usuário em um só lugar, com gráficos de desempenho e relatórios detalhados para cada módulo, oferecendo uma visão clara e abrangente das finanças.

### Regras de Negócio

As regras de negócio garantirão que cada usuário tenha um único cadastro por CPF, com segurança na autenticação e cálculo automático de valores patrimoniais e de dívidas. Haverá notificações sobre vencimentos e alertas quando o orçamento estiver próximo do limite.

### Requisitos Não Funcionais

O sistema será desenvolvido com uma arquitetura moderna utilizando Node.js e TypeScript no backend, e React.js no frontend, usaremos o banco de dados postgresSQL para perssistência. Será projetado para escalar horizontalmente e suportar até 10.000 usuários simultâneos, com alta disponibilidade (99,9% uptime) e tempo de resposta inferior a 2 segundos. Também será responsivo e seguro, com uso de JWT para autenticação e criptografia de dados sensíveis.

Este sistema financeiro completo atenderá às necessidades de controle financeiro pessoal com alta performance e segurança, proporcionando uma experiência eficiente e intuitiva.


# Requisitos

**## Requisitos funcionais (RF)**

**# Módulo de Usuários**

- [ ]  RF01: O sistema deve permitir o cadastro de novos usuários.
- [ ]  RF02: O sistema deve permitir a autenticação de usuários cadastrados.
- [ ]  RF03: O sistema deve permitir a recuperação de senha por e-mail.
- [ ]  RF04: O sistema deve permitir a visualização do perfil do usuário.
- [ ]  RF05: O sistema deve permitir a edição do perfil do usuário.
- [ ]  RF06: O sistema deve permitir a exclusão da conta do usuário.
- [ ]  RF07: O sistema deve permitir a alteração da senha do usuário.
- [ ]  RF08: O sistema deve permitir a alteração do e-mail do usuário.
- [ ]  RF09: O sistema deve permitir a Autenticação de dois fatores usando Google Authenticator.

**# Módulo de Lançamentos**

- [ ]  RF10: O sistema deve permitir ao usuário cadastrar, editar e remover lançamentos financeiros. Os lançamentos financeiros podem ser de dois tipos: despesas e receitas.
- [ ]  RF11: As despesas deverão ser representadas por valores negativos e as receitas por valores positivos.
- [ ]  RF12: O sistema deve permitir ao usuário categorizar os lançamentos em categorias e subcategoria ex: (Alimentação => Supermercado | Saúde => Farmacia).
- [ ]  RF13: Os lançamentos devem ter um ticket quando o pagamento for confirmado, para controle de pagamento.
- [ ]  RF14: O sistema deve permitir ao usuário filtrar os lançamentos por data, categoria, subcategoria, tipo de despesa, pagos, não pagos.
- [ ]  RF15: O sistema deve permitir ao usuário consultar detalhes de cada lançamento (data, categoria, subcategoria, tipo de despesa, pagos, não pagos).

**# Módulo de Investimento**

- [ ]  RF06: O sistema deve permitir ao usuário cadastrar, editar e remover investimento em aplicações financeiras.
- [ ]  RF17: O sistema deve permitir ao usuário consultar detalhes de cada investimento (nome, valor, rendimento, data de aplicação, etc.).
- [ ]  RF18: O sistema deve calcular automaticamente o rendimento acumulado dos investimentos.

**# Módulo de Patrimônio**

- [ ]  RF19: O sistema deve permitir ao usuário cadastrar, editar e remover bens patrimoniais (imóveis, veículos, etc.).
- [ ]  RF20: O sistema deve exibir o valor total do patrimônio com base no valor dos bens cadastrados.
- [ ]  RF21: O sistema deve permitir a atualização do valor de mercado dos bens patrimoniais.

**# Módulo de Dívidas**

- [ ]  RF22: O sistema deve permitir ao usuário cadastrar, editar e remover dívidas (empréstimos, financiamentos, etc.).
- [ ]  RF23: O sistema deve calcular automaticamente o saldo devedor com base nas parcelas pagas e a pagar.
- [ ]  RF24: O sistema deve exibir um cronograma de pagamento das dívidas com suas respectivas datas de vencimento.

**# Módulo de Projetos**

- [ ]  RF25: O sistema deve permitir ao usuário cadastrar, editar e remover projetos financeiros (viagens, reformas, etc.).
- [ ]  RF26: O sistema deve permitir definir metas financeiras para cada projeto.
- [ ]  RF27: O sistema deve exibir o progresso financeiro de cada projeto em relação à meta.

**# Módulo de Reserva Financeira**

- [ ]  RF28: O sistema deve permitir ao usuário cadastrar, editar e remover reservas financeiras.
- [ ]  RF29: O sistema deve calcular automaticamente o valor total das reservas financeiras.

**# Módulo de Aposentadoria**

- [ ]  RF30: O sistema deve permitir ao usuário cadastrar, editar e remover informações sobre sua aposentadoria planejada.
- [ ]  RF31: O sistema deve calcular o valor estimado para a aposentadoria com base em simulações de contribuições e rendimentos.

**# Módulo de Movimentações de Caixa**

- [ ]  RF32: O sistema deve permitir o registro de entradas e saídas de dinheiro.
- [ ]  RF33: O sistema deve categorizar as movimentações financeiras (salário, compras, investimentos, etc.).
- [ ]  RF34: O sistema deve exibir o saldo de caixa atualizado em tempo real.

**# Módulo de Orçamento**

- [ ]  RF35: O sistema deve permitir ao usuário definir orçamentos mensais para diferentes categorias de despesas.
- [ ]  RF35: O sistema deve exibir um alerta quando o orçamento definido for ultrapassado.
- [ ]  RF37: O sistema deve permitir a visualização de relatórios mensais de despesas em comparação com o orçamento.

**# Módulo de Dashboard**

- [ ]  RF38: O sistema deve exibir um painel de controle consolidado com informações resumidas de todas as finanças do usuário.
- [ ]  RF39: O sistema deve exibir gráficos de desempenho financeiro (patrimônio, dívidas, aplicações, etc.).
- [ ]  RF40: O sistema deve fornecer relatórios detalhados para cada módulo financeiro.

**# Regras de negócio (RN)**

- [ ]  RN01: O sistema deve permitir apenas um cadastro por CPF, e o usuário deve ser autenticado para acessar as funcionalidades.
- [ ]  RN02: O valor total do patrimônio do usuário deve ser recalculado sempre que um novo bem é adicionado, removido ou seu valor é atualizado.
- [ ]  RN03: O sistema deve permitir ao usuário planejar o pagamento de dívidas e notificar 2 dias antes do vencimento de cada parcela.
- [ ]  RN04: O usuário deve ser notificado quando alcançar 90% do orçamento estabelecido em uma categoria de despesa.
- [ ]  RN05: O sistema deve permitir ao usuário exportar relatórios financeiros em formato PDF, CSV e XLSX entre um intervalo de datas.

**# Requisitos não funcionais (RNF)**

- [ ]  RNF01: O sistema deve ser desenvolvido utilizando TypeScript e Node.js para o backend.
- [ ]  RNF02: O sistema deve ser desenvolvido utilizando React.js TypeScript e Node.js para o frontend.
- [ ]  RNF04: O sistema deve utilizar PostgreSQL como banco de dados relacional.
- [ ]  RNF05: O sistema deve suportar até 10.000 usuários simultâneos.
- [ ]  RNF06: O tempo de resposta do sistema para operações de consulta deve ser inferior a 2 segundos.
- [ ]  RNF07: O sistema deve ser responsivo e acessível de dispositivos móveis e desktops.
- [ ]  RNF08: O sistema deve implementar autenticação e autorização utilizando JWT (JSON Web Token).
- [ ]  RNF09: O sistema deve seguir as melhores práticas de segurança, incluindo encriptação de dados sensíveis.
- [ ]  RNF10: O sistema deve garantir alta disponibilidade com uma taxa de uptime de 99.9%.
- [ ]  RNF11: O sistema deve ser escalável horizontalmente para lidar com aumento de carga de usuários e dados.
- [ ]  RNF12: Todas as operações financeiras e transações devem ser auditáveis com histórico de mudanças.