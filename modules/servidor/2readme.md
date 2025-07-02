# 📖 Glossário de Códigos de Status HTTP

Os **códigos de status HTTP** são mensagens numéricas enviadas pelo servidor para indicar o resultado de uma requisição feita pelo cliente (navegador, aplicativo, etc.). Eles são divididos em 5 categorias, de acordo com seu primeiro dígito:

---

## 🔢 Categorias de Status

| Código Inicial | Categoria                 | Significado Geral                         |
|----------------|---------------------------|--------------------------------------------|
| 1xx            | Informativo               | A requisição foi recebida e está em processamento |
| 2xx            | Sucesso                   | A requisição foi bem-sucedida              |
| 3xx            | Redirecionamento          | Requisição precisa ser redirecionada       |
| 4xx            | Erro do Cliente           | O problema está na requisição feita pelo cliente |
| 5xx            | Erro do Servidor          | O servidor falhou ao processar a requisição |

---

## ✅ 2xx — Sucesso

| Código | Significado                        | Descrição                                                                 |
|--------|------------------------------------|---------------------------------------------------------------------------|
| 200    | OK                                 | Requisição bem-sucedida                                                   |
| 201    | Created                            | Recurso criado com sucesso (usado em POST)                                |
| 202    | Accepted                           | Requisição aceita, mas ainda em processamento                             |
| 204    | No Content                         | Requisição concluída, mas sem conteúdo na resposta                        |

---

## 🔁 3xx — Redirecionamento

| Código | Significado                        | Descrição                                                                 |
|--------|------------------------------------|---------------------------------------------------------------------------|
| 301    | Moved Permanently                  | Recurso foi movido permanentemente (redirecionamento permanente)         |
| 302    | Found (antigo "Moved Temporarily") | Redirecionamento temporário                                               |
| 304    | Not Modified                       | Recurso não foi modificado (usado em cache)                              |

---

## ⚠️ 4xx — Erros do Cliente

| Código | Significado                        | Descrição                                                                 |
|--------|------------------------------------|---------------------------------------------------------------------------|
| 400    | Bad Request                        | Requisição malformada ou inválida                                         |
| 401    | Unauthorized                       | Necessário autenticação                                                   |
| 403    | Forbidden                          | Acesso negado, mesmo com autenticação                                     |
| 404    | Not Found                          | Recurso não encontrado                                                    |
| 405    | Method Not Allowed                 | Método HTTP não permitido para a URL solicitada                          |

---

## 🛑 5xx — Erros do Servidor

| Código | Significado                        | Descrição                                                                 |
|--------|------------------------------------|---------------------------------------------------------------------------|
| 500    | Internal Server Error              | Erro interno no servidor                                                 |
| 501    | Not Implemented                    | Funcionalidade não implementada                                          |
| 502    | Bad Gateway                        | Resposta inválida de outro servidor intermediário                        |
| 503    | Service Unavailable                | Servidor fora do ar ou sobrecarregado                                    |
| 504    | Gateway Timeout                    | O servidor demorou muito para responder via gateway                      |

---

## 💡 Uso na Prática

No Node.js, usamos os códigos assim:

```js
res.writeHead(200, { 'Content-Type': 'text/html' }); // sucesso
res.writeHead(404, { 'Content-Type': 'text/plain' }); // não encontrado
res.writeHead(500, { 'Content-Type': 'text/plain' }); // erro no servidor
````

---

## 📚 Dica

* `200` para sucesso
* `400` para erro do cliente
* `404` se a URL não existir
* `500` se houver um erro no código do servidor

Você pode encontrar todos os códigos oficiais em: [https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status)

---
