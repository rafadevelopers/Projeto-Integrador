-- tabela g?nero
INSERT INTO GENERO (DESCRICAO_GENERO) VALUES ('FEMININO');
INSERT INTO GENERO (DESCRICAO_GENERO) VALUES ('MASCULINO');
INSERT INTO GENERO (DESCRICAO_GENERO) VALUES ('N?O-BIN?RIO');
INSERT INTO GENERO (DESCRICAO_GENERO) VALUES ('OUTROS');

-- tabela uf
INSERT INTO UF VALUES ('AC', 'ACRE');
INSERT INTO UF VALUES ('AL', 'ALAGOAS');
INSERT INTO UF VALUES ('AM', 'AMAZONAS');
INSERT INTO UF VALUES ('AP', 'AMAP?');
INSERT INTO UF VALUES ('BA', 'BAHIA');
INSERT INTO UF VALUES ('CE', 'CEAR?');
INSERT INTO UF VALUES ('DF', 'DISTRITO FEDERAL');
INSERT INTO UF VALUES ('ES', 'ESP?RITO SANTO');
INSERT INTO UF VALUES ('GO', 'GOI?S');
INSERT INTO UF VALUES ('MA', 'MARANH?O');
INSERT INTO UF VALUES ('MG', 'MINAS GERAIS');
INSERT INTO UF VALUES ('MS', 'MATO GROSSO DO SUL');
INSERT INTO UF VALUES ('MT', 'MATO GROSSO');
INSERT INTO UF VALUES ('PA', 'PAR?');
INSERT INTO UF VALUES ('PB', 'PARA?BA');
INSERT INTO UF VALUES ('PE', 'PERNAMBUCO');
INSERT INTO UF VALUES ('PI', 'PIAU?');
INSERT INTO UF VALUES ('PR', 'PARAN?');
INSERT INTO UF VALUES ('RJ', 'RIO DE JANEIRO');
INSERT INTO UF VALUES ('RN', 'RIO GRANDE DO NORTE');
INSERT INTO UF VALUES ('RO', 'ROND?NIA');
INSERT INTO UF VALUES ('RR', 'RORAIMA');
INSERT INTO UF VALUES ('RS', 'RIO GRANDE DO SUL');
INSERT INTO UF VALUES ('SC', 'SANTA CATARINA');
INSERT INTO UF VALUES ('SE', 'SERGIPE');
INSERT INTO UF VALUES ('SP', 'S?O PAULO');
INSERT INTO UF VALUES ('TO', 'TOCANTINS');

-- tabela bandeira cartao
INSERT INTO BANDEIRA (DESCRICAO_BANDEIRA) VALUES ('VISA');
INSERT INTO BANDEIRA (DESCRICAO_BANDEIRA) VALUES ('MASTERCARD');
INSERT INTO BANDEIRA (DESCRICAO_BANDEIRA) VALUES ('ELO');
INSERT INTO BANDEIRA (DESCRICAO_BANDEIRA) VALUES ('HIPERCARD');
INSERT INTO BANDEIRA (DESCRICAO_BANDEIRA) VALUES ('AMERICAN EXPRESS');
INSERT INTO BANDEIRA (DESCRICAO_BANDEIRA) VALUES ('DINERS CLUB');

-- tabela categorias

insert into categoria (descricao_categoria) values ('Churrasco');
insert into categoria (descricao_categoria) values ('Cozinha');
insert into categoria (descricao_categoria) values ('Facas Especiais');
insert into categoria (descricao_categoria) values ('R?plicas');

-- tabela marca:

insert into marca (descricao_marca) values ('ToyShow');
insert into marca (descricao_marca) values ('Tramontina');
insert into marca (descricao_marca) values ('Zakharov');
insert into marca (descricao_marca) values ('Brinox');
insert into marca (descricao_marca) values ('Zwilling J.A. Henckels');
insert into marca (descricao_marca) values ('Cascavel');
insert into marca (descricao_marca) values ('Alma Campeira');

-- tabela preco_produto:

insert into preco_produto (valor_preco) values (79.99);
insert into preco_produto (valor_preco) values (89.99);
insert into preco_produto (valor_preco) values (109.99);
insert into preco_produto (valor_preco) values (127.99);
insert into preco_produto (valor_preco) values (169.99);
insert into preco_produto (valor_preco) values (200.99);
insert into preco_produto (valor_preco) values (419.99);
insert into preco_produto (valor_preco) values (559.99);
insert into preco_produto (valor_preco) values (729.99);
insert into preco_produto (valor_preco) values (1099.99);
insert into preco_produto (valor_preco) values (1399.99);
insert into preco_produto (valor_preco) values (7320.99);

-- tabela produtos

insert into produto (descricao_produto, altura, imagem, comprimento, nome_produto, 
peso, largura, id_marca, id_categoria, id_preco_produto, destaque, novidade)
values ('Cutelo especializada em cortes pesados e profundos, em qualquer tipo de alimento', 2, 
'https://i.ibb.co/st3XYv1/1.jpg', 30, 'Faca Cutelo Tramontina Cabo Amarelo 30cm', 270, 8, 2, 2, 3, false, false);

insert into produto (descricao_produto, altura, imagem, comprimento, nome_produto, 
peso, largura, id_marca, id_categoria, id_preco_produto, destaque, novidade)
values ('Faca de mesa com dentes polidos, os quais trazem mais conforto nos cortes', 2, 
'https://i.ibb.co/yPfrb59/2.jpg', 20, 'Faca de Mesa Tramontina A?o Inox Continental', 35, 1.5, 2, 2, 1, false, false);

insert into produto (descricao_produto, altura, imagem, comprimento, nome_produto, 
peso, largura, id_marca, id_categoria, id_preco_produto, destaque, novidade)
values ('Faca de chef especializada e eficiente para qualquer alimento ', 5, 
'https://i.ibb.co/2MxcF1w/3.jpg', 30, 'Faca Chef Tramontina com Cabo Branco Master', 127, 2, 2, 2, 3, false, false);

-- 4

insert into produto (descricao_produto, altura, imagem, comprimento, nome_produto, 
peso, largura, id_marca, id_categoria, id_preco_produto, destaque, novidade)
values ('Faca de churrasco com cabo longo, para manuseio seguro e confort?vel ', 2, 
'https://i.ibb.co/WsGfy9B/4.jpg', 20, 'Faca Churrasco Brinox com Cabo longo', 30, 2, 4, 1, 2, false, false);

insert into produto (descricao_produto, altura, imagem, comprimento, nome_produto, 
peso, largura, id_marca, id_categoria, id_preco_produto, destaque, novidade)
values ('Faca para sobremesa com corte preciso e perfeito', 1.3, 
'https://i.ibb.co/jbwFWdv/5.jpg', 18, 'Faca para Sobremesa Brinox ', 36, 1.5, 4, 2, 1, false, false);

insert into produto (descricao_produto, altura, imagem, comprimento, nome_produto, 
peso, largura, id_marca, id_categoria, id_preco_produto, destaque, novidade)
values ('Faca corta asas com qualidade e durabilidade para qualquer ingrediente', 2.5, 
'https://i.ibb.co/cgMTMBp/6.jpg', 28, 'Faca Corte de Asa Tramontina Cabo Amarelo ', 100, 4.5, 2, 2, 4, false, false);

insert into produto (descricao_produto, altura, imagem, comprimento, nome_produto, 
peso, largura, id_marca, id_categoria, id_preco_produto, destaque, novidade)
values ('Faca de chef especializada, resistente e eficiente para qualquer alimento', 2, 
'https://i.ibb.co/b6pzRbg/7.jpg', 32, 'Faca Chef Tramontina com Cabo Madeira Marrom', 238, 4, 2, 2, 6, false, false);

-- 8

insert into produto (descricao_produto, altura, imagem, comprimento, nome_produto, 
peso, largura, id_marca, id_categoria, id_preco_produto, destaque, novidade)
values ('Faca para churrasco eficiente, resistente e segura', 2, 
'https://i.ibb.co/qCyFn5y/8.jpg', 22, 'Faca para Churrasco Tramontina Century', 200, 4, 2, 1, 5, false, false);

insert into produto (descricao_produto, altura, imagem, comprimento, nome_produto, 
peso, largura, id_marca, id_categoria, id_preco_produto, destaque, novidade)
values ('Faca especializada com preci??o e alta performance para culin?ria oriental', 2.3, 
'https://i.ibb.co/VJSgKmt/9.jpg', 30, 'Faca Nakiri Tramontina Cabo Preto', 190, 5, 2, 1, 7, false, false);

insert into produto (descricao_produto, altura, imagem, comprimento, nome_produto, 
peso, largura, id_marca, id_categoria, id_preco_produto, destaque, novidade)
values ('R?plica das l?minas do caos, usado por Kratos no game God Of War', 3, 
'https://i.ibb.co/25DdYNQ/10.jpg', 62, 'L?minas Kratos God of War', 500, 12, 1, 4, 8, false, false);

insert into produto (descricao_produto, altura, imagem, comprimento, nome_produto, 
peso, largura, id_marca, id_categoria, id_preco_produto, destaque, novidade)
values ('Faca de chef especializada, resistente e eficiente para qualquer tipo de alimento', 2, 
'https://i.ibb.co/L0cryq6/11.jpg', 32, 'Faca Chef Tramontina com Cabo Vermelho', 238, 4, 2, 2, 6, false, false);

-- 12

insert into produto (descricao_produto, altura, imagem, comprimento, nome_produto, 
peso, largura, id_marca, id_categoria, id_preco_produto, destaque, novidade)
values ('Faca dessosa com corte perfeito para separa??o da carne dos ossos', 2.5, 
'https://i.ibb.co/RjpnDL3/12.jpg', 28, 'Faca Dessosa Tramontina Cabo Azul ', 100, 4.5, 2, 2, 4, false, false);

insert into produto (descricao_produto, altura, imagem, comprimento, nome_produto, 
peso, largura, id_marca, id_categoria, id_preco_produto, destaque, novidade)
values ('Cutelo especializada em cortes pesados e profundos, em qualquer tipo de alimento', 2, 
'https://i.ibb.co/4RBLrV3/13.jpg', 28, 'Faca Cutelo Zakharov Cabo Madeira', 250, 8, 3, 2, 3, false, false);

insert into produto (descricao_produto, altura, imagem, comprimento, nome_produto, 
peso, largura, id_marca, id_categoria, id_preco_produto, destaque, novidade)
values ('Faca de p?o resistentes, confort?veis e seguras', 2.5, 
'https://i.ibb.co/HX9TLT1/14.jpg', 33, 'Faca de P?o Brinox Cabo Branco', 197, 38, 4, 2, 3, false, false);

-- 15 - Arrumando apartir daqui:

insert into produto (descricao_produto, altura, imagem, comprimento, nome_produto, 
peso, largura, id_marca, id_categoria, id_preco_produto, destaque, novidade)
values ('Faca dessosa com corte perfeito para separa??o da carne dos ossos', 3.6, 
'https://i.ibb.co/Snv990k/15.jpg', 27.2, 'Faca Dessosa Tramontina Cabo Madeira', 89, 1.8, 2, 2, 2, false, false);

-- 16

insert into produto (descricao_produto, altura, imagem, comprimento, nome_produto, 
peso, largura, id_marca, id_categoria, id_preco_produto, destaque, novidade)
values ('Faca corta asas com qualidade e durabilidade para qualquer ingrediente', 2.2, 
'https://i.ibb.co/zn7pDfN/16.jpg', 26, 'Faca Corte de Asa Tramontina Cabo Azul ', 93, 4.3, 2, 2, 1, false, false);

insert into produto (descricao_produto, altura, imagem, comprimento, nome_produto, 
peso, largura, id_marca, id_categoria, id_preco_produto, destaque, novidade)
values ('Faca dessosa com corte perfeito para separa??o da carne dos ossos', 2.5, 
'https://i.ibb.co/YfNGGhF/17.jpg', 28, 'Faca Dessosa Tramontina Cabo Vermelho ', 100, 4.5, 2, 2, 4, false, false);

-- 18

insert into produto (descricao_produto, altura, imagem, comprimento, nome_produto, 
peso, largura, id_marca, id_categoria, id_preco_produto, destaque, novidade)
values ('R?plica da Kunai do anime Naruto', 23, 
'https://i.ibb.co/zP5fJBk/18.jpg', 22, 'Kunai Naruto', 12 , 12, 1, 4, 1, false, false);

insert into produto (descricao_produto, altura, imagem, comprimento, nome_produto, 
peso, largura, id_marca, id_categoria, id_preco_produto, destaque, novidade)
values ('Faca de chef especializada, resistente e eficiente para qualquer tipo de alimento', 2, 
'https://i.ibb.co/CW5dg6n/19.jpg', 32, 'Faca Chef J.A. Henckels Cabo Branco', 180, 4.5, 5, 2, 5, false, false);

-- 20 - FEITA:

insert into produto (descricao_produto, altura, imagem, comprimento, nome_produto, 
peso, largura, id_marca, id_categoria, id_preco_produto, destaque, novidade)
values ('Faca preparada para todas as situa??es, desde cozinha at? ca?a / pesca', 2.2, 
'https://i.ibb.co/yp0Bg4X/20.jpg', 24, 'Faca Esportiva Hunter Zakharov', 185, 3.5, 3, 3, 9, false, false);

-- 21 - FEITA:

insert into produto (descricao_produto, altura, imagem, comprimento, nome_produto, 
peso, largura, id_marca, id_categoria, id_preco_produto, destaque, novidade)
values ('Faca especial preparada para churrasco e cozinha', 2.8, 
'https://i.ibb.co/cJ6thnP/21.jpg', 38, 'Faca Churrasco e Cozinha Zakharov Premium', 260, 3.8, 3, 3, 7, false, false);

insert into produto (descricao_produto, altura, imagem, comprimento, nome_produto, 
peso, largura, id_marca, id_categoria, id_preco_produto, destaque, novidade)
values ('R?plica da espada Frostmourne do game World Of Warcraft', 25, 
'https://i.ibb.co/MkD7TLG/22.jpg', 107, 'Frostmourne World Of Warcraft', 300 , 25, 1, 4, 11, false, false);

insert into produto (descricao_produto, altura, imagem, comprimento, nome_produto, 
peso, largura, id_marca, id_categoria, id_preco_produto, destaque, novidade)
values ('Faca perfeita e pr?tica para o corte suave do tomate', 2.4, 
'https://i.ibb.co/tqx887f/23.jpg', 50, 'Faca para Tomate Brinox', 35, 23, 4, 2, 1, false, false);

insert into produto (descricao_produto, altura, imagem, comprimento, nome_produto, 
peso, largura, id_marca, id_categoria, id_preco_produto, destaque, novidade)
values ('R?plica da espada Master Sword do game Zelda', 89, 
'https://i.ibb.co/YjjYfqH/24.jpg', 89, 'Espada Master Sword Zelda', 100 , 25, 1, 4, 10, false, false);

insert into produto (descricao_produto, altura, imagem, comprimento, nome_produto, 
peso, largura, id_marca, id_categoria, id_preco_produto, destaque, novidade)
values ('Faca para frutas e legumes, corte perfeito e com bastante qualidade.', 1.4, 
'https://i.ibb.co/K9J5WRz/25.jpg', 20.7, 'Faca de Legume Tramontina Cabo Branco ', 40, 2.3, 2, 2, 1, false, false);

insert into produto (descricao_produto, altura, imagem, comprimento, nome_produto, 
peso, largura, id_marca, id_categoria, id_preco_produto, destaque, novidade)
values ('Faca pr?tica e resistente, perfeita para ervas e temperos.', 1.5, 
'https://i.ibb.co/nMPMMKt/26.jpg', 25, 'Mezzaluna Tramontina Polywood com L?mina em A?o', 320, 15, 2, 2, 3, false, false);

insert into produto (descricao_produto, altura, imagem, comprimento, nome_produto, 
peso, largura, id_marca, id_categoria, id_preco_produto, destaque, novidade)
values ('Faca perfeita para um almo?o em fam?lia, ao trazer qualidade e destaque a mesa.', 0.6, 
'https://i.ibb.co/Jj0VfR7/27.jpg', 23, 'Faca Churrasco Tramontina A?o Inox', 234, 9, 2, 1, 1, false, false);

insert into produto (descricao_produto, altura, imagem, comprimento, nome_produto, 
peso, largura, id_marca, id_categoria, id_preco_produto, destaque, novidade)
values ('R?plica da espada Sandai Kitetsu do personagem Zoro do anime One Piece', 10, 
'https://i.ibb.co/s2Z7q9T/28.jpg', 110, 'Espada Zoro One Piece', 1200, 10, 1, 4, 7, false, false);

insert into produto (descricao_produto, altura, imagem, comprimento, nome_produto, 
peso, largura, id_marca, id_categoria, id_preco_produto, destaque, novidade)
values ('Faca preparada para todas as situa??es, desde cozinha at? ca?a / pesca', 12.5, 
'https://i.ibb.co/BG4fvpf/29.jpg', 31, 'Faca De Ca?a/Churrasco Zakharov', 150, 18, 3, 3, 2, false, false);

insert into produto (descricao_produto, altura, imagem, comprimento, nome_produto, 
peso, largura, id_marca, id_categoria, id_preco_produto, destaque, novidade)
values ('Espada Katana decorativa, perfeita para fantasias e/ou cosplays', 8, 
'https://i.ibb.co/pxvdCtn/30.jpg', 105, 'Espada Katana Decorativa', 736, 8, 1, 4, 7, false, false);

-- 31:

insert into produto (descricao_produto, altura, imagem, comprimento, nome_produto, 
peso, largura, id_marca, id_categoria, id_preco_produto, destaque, novidade)
values ('Faca ideal para corte de carne de m?dio e grande porte e cozinha em geral.', 12.5, 
'https://i.ibb.co/bvD5CcC/31.jpg', 34.5, 'Faca Churrasco e Cozinha Cascavel Osso Madeira', 243, 4.1, 6, 1, 5, false, false);

insert into produto (descricao_produto, altura, imagem, comprimento, nome_produto, 
peso, largura, id_marca, id_categoria, id_preco_produto, destaque, novidade)
values ('Faca feita artesanalmente e aprovada por rigorosos testes de qualidade.', 25, 
'https://i.ibb.co/Vtj08pg/32.jpg', 38, 'Faca Churrasco 10 Alma Campeira Cabo Resina Verde', 243, 4.5, 7, 1, 6, false, false);

insert into produto (descricao_produto, altura, imagem, comprimento, nome_produto, 
peso, largura, id_marca, id_categoria, id_preco_produto, destaque, novidade)
values ('Faca com corte preciso e boa qualidade, inspirado na cor da natureza.', 2, 
'https://i.ibb.co/wgyXVFx/33.jpg', 33, 'Faca Chef Zwilling com Cabo Azul', 130, 4.5, 5, 2, 6, false, false);

insert into produto (descricao_produto, altura, imagem, comprimento, nome_produto, 
peso, largura, id_marca, id_categoria, id_preco_produto, destaque, novidade)
values ('Faca ideal para as tarefas di?rias de cozinha, para alimentos duros ou macios.', 1, 
'https://i.ibb.co/BfWX1Df/34.jpg', 22, 'Faca Universal Zwilling com Cabo Vermelho Twin Grip', 26, 1.7, 5, 2, 1, false, false);

insert into produto (descricao_produto, altura, imagem, comprimento, nome_produto, 
peso, largura, id_marca, id_categoria, id_preco_produto, destaque, novidade)
values ('Concebemos o projeto de design Bob Kramer, faca de autenticidade excepcional, nitidez e beleza.', 5, 
'https://i.ibb.co/0tj742s/35.jpg', 33, 'Faca Chef Zwilling Bob Kramer Euro Stainless Damascus 8', 275, 2.5, 5, 3, 12, false, false);

insert into produto (descricao_produto, altura, imagem, comprimento, nome_produto, 
peso, largura, id_marca, id_categoria, id_preco_produto, destaque, novidade)
values ('R?plica da faca Karambit do game CS:GO', 10, 
'https://i.ibb.co/L1fjNyF/36.jpg', 230, 'Karambit CS:GO', 230, 20, 1, 4, 3, false, false);

-- tabela estoque

insert into estoque (id_produto, quantidade_estoque) values (1, 30);
insert into estoque (id_produto, quantidade_estoque) values (2, 30);
insert into estoque (id_produto, quantidade_estoque) values (3, 30);
insert into estoque (id_produto, quantidade_estoque) values (4, 30);
insert into estoque (id_produto, quantidade_estoque) values (5, 30);
insert into estoque (id_produto, quantidade_estoque) values (6, 30);
insert into estoque (id_produto, quantidade_estoque) values (7, 30);
insert into estoque (id_produto, quantidade_estoque) values (8, 30);
insert into estoque (id_produto, quantidade_estoque) values (9, 30);
insert into estoque (id_produto, quantidade_estoque) values (10, 10);
insert into estoque (id_produto, quantidade_estoque) values (11, 30);
insert into estoque (id_produto, quantidade_estoque) values (12, 30);
insert into estoque (id_produto, quantidade_estoque) values (13, 30);
insert into estoque (id_produto, quantidade_estoque) values (14, 30);
insert into estoque (id_produto, quantidade_estoque) values (15, 30);
insert into estoque (id_produto, quantidade_estoque) values (16, 30);
insert into estoque (id_produto, quantidade_estoque) values (17, 30);
insert into estoque (id_produto, quantidade_estoque) values (18, 15);
insert into estoque (id_produto, quantidade_estoque) values (19, 30);
insert into estoque (id_produto, quantidade_estoque) values (20, 10);
insert into estoque (id_produto, quantidade_estoque) values (21, 10);
insert into estoque (id_produto, quantidade_estoque) values (22, 10);
insert into estoque (id_produto, quantidade_estoque) values (23, 30);
insert into estoque (id_produto, quantidade_estoque) values (24, 10);
insert into estoque (id_produto, quantidade_estoque) values (25, 30);
insert into estoque (id_produto, quantidade_estoque) values (26, 30);
insert into estoque (id_produto, quantidade_estoque) values (27, 30);
insert into estoque (id_produto, quantidade_estoque) values (28, 10);
insert into estoque (id_produto, quantidade_estoque) values (29, 10);
insert into estoque (id_produto, quantidade_estoque) values (30, 10);
insert into estoque (id_produto, quantidade_estoque) values (31, 30);
insert into estoque (id_produto, quantidade_estoque) values (32, 20);
insert into estoque (id_produto, quantidade_estoque) values (33, 30);
insert into estoque (id_produto, quantidade_estoque) values (34, 30);
insert into estoque (id_produto, quantidade_estoque) values (35, 10);
insert into estoque (id_produto, quantidade_estoque) values (36, 10);

-- tabela tipo_pagamento

insert into tipo_pagamento (descricao_tipo_pagamento) values ('Cart?o de Cr?dito');
insert into tipo_pagamento (descricao_tipo_pagamento) values ('Boleto');
insert into tipo_pagamento (descricao_tipo_pagamento) values ('PIX');

-- tabela status_pedido 

insert into status_pedido (descricao_status_pedido) values ('PEDIDO EFETUADO');
insert into status_pedido (descricao_status_pedido) values ('AGUARDANDO APROVA??O PAGAMENTO');
insert into status_pedido (descricao_status_pedido) values ('PAGAMENTO APROVADO');
insert into status_pedido (descricao_status_pedido) values ('CONCLUIDO');
insert into status_pedido (descricao_status_pedido) values ('CANCELADO');

-- Atualizando produtos com destaque / novidade

update produto set destaque = true where id_produto = 24;
update produto set destaque = true where id_produto = 1;
update produto set destaque = true where id_produto = 18;
update produto set destaque = true where id_produto = 7;

update produto set novidade = true where id_produto = 10;
update produto set novidade = true where id_produto = 8;
update produto set novidade = true where id_produto = 26;
update produto set novidade = true where id_produto = 20;




