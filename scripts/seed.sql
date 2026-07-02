-- ======================
-- INSERT AUTHORS
-- ======================

INSERT INTO authors (name, email, bio) VALUES
('Ana García', 'ana@example.com', 'Desarrolladora backend'),
('Carlos Ruiz', 'carlos@example.com', 'Especialista en bases de datos'),
('María López', 'maria@example.com', 'Ingeniera de software'),
('Laura Martínez', 'laura@example.com', 'Desarrolladora Node.js'),
('Jorge Ramírez', 'jorge@example.com', 'Arquitecto de software'),
('Valentina Torres', 'valentina@example.com', 'Especialista REST'),
('Daniel Herrera', 'daniel@example.com', 'Backend developer'),
('Sofía Castro', 'sofia@example.com', 'Data analyst'),
('Andrés Moreno', 'andres@example.com', 'Full stack developer'),
('Camila Vargas', 'camila@example.com', 'Software engineer'),
('Mateo Gómez', 'mateo@example.com', 'DevOps engineer'),
('Juliana Díaz', 'juliana@example.com', 'Cloud developer'),
('Felipe Rojas', 'felipe@example.com', 'Especialista PostgreSQL'),
('Paula Sánchez', 'paula@example.com', 'Ingeniera backend'),
('Sebastián Ortiz', 'sebastian@example.com', 'Consultor tecnológico'),
('Natalia Vega', 'natalia@example.com', 'Desarrolladora APIs'),
('David Molina', 'david@example.com', 'Software architect'),
('Isabella Pérez', 'isabella@example.com', 'Backend engineer'),
('Alejandro Silva', 'alejandro@example.com', 'Desarrollador Express'),
('Gabriela Fernández', 'gabriela@example.com', 'Ingeniera informática');

-- ======================
-- INSERT POSTS
-- ======================

INSERT INTO posts
(title, content, author_id, published)
VALUES

('Introducción a Node.js','Fundamentos de Node.',1,true),

('PostgreSQL avanzado','Consultas SQL.',2,true),

('Construyendo APIs','Arquitectura REST.',3,true),

('Express middleware','Manejo middleware.',4,true),

('Docker básico','Contenedores.',5,false),

('Microservicios','Diseño distribuido.',6,true),

('Patrón MVC','Organización backend.',7,true),

('Testing APIs','Supertest.',8,false),

('Deploy Railway','Despliegue.',9,true),

('JWT explicado','Autenticación.',10,false),

('Clean Architecture','Separación capas.',11,true),

('Optimización SQL','Índices.',12,true),

('Manejo errores','Error middleware.',13,false),

('Variables entorno','.env seguro.',14,true),

('Git profesional','Commits.',15,true),

('Express Router','Organización.',16,true),

('Patrones backend','Buenas prácticas.',17,false),

('JOIN en SQL','Relaciones.',18,true),

('OpenAPI básico','Documentación.',19,false),

('Proyecto MiniBlog','Integración completa.',20,true);

-- ======================
-- INSERT COMMENTS
-- ======================

INSERT INTO comments
(content, author_id, post_id)
VALUES

('Excelente explicación',2,1),

('Muy útil',3,1),

('Gran artículo',4,2),

('Lo entendí rápido',5,3),

('Buen contenido',6,4),

('Muy claro',7,5),

('Gracias por compartir',8,6),

('Me sirvió mucho',9,7),

('Buen ejemplo',10,8),

('Interesante enfoque',11,9),

('Excelente trabajo',12,10),

('Muy completo',13,11),

('Lo aplicaré',14,12),

('Gran documentación',15,13),

('Muy profesional',16,14),

('Buen detalle',17,15),

('Aprendí bastante',18,16),

('Excelente explicación',19,17),

('Gracias autor',20,18),

('Quiero más contenido',1,19);

