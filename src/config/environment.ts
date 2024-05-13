import 'dotenv/config'

const CONFIG = {
  db: process.env.DB,
  jwt_public: `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAkFlPujjgFkcOQRChY7+n
P3esMkfEz0hkSN/ZRzRpODe3+aiIR/i7OGPymVVPwuDT/FElpLEdqBm+1E5FdS7r
cZ1Hd7xElavXUdTCOUMyuWX62Jryc6N6/jsJ1WyMfhOARKo/Q8zrN1PAcqo2hcYh
SeGvsUiHqOn8wX+SicjE6mO8v5nM9kkiz78/3UPg6NCVMPM/u65U0MbUxTYeUmDs
Ln0zF8gCxpGowJmoSaplnMXrjCOJyVf3H6X9DEnmGz/StfNf14yWIVXYqSsKm0/k
vg0nEiW7jBaLngVY/p89a91Uw/SqsNOvg9WxuUiGViX9VbTJZrlI0yB911YoQKjv
2wIDAQAB
-----END PUBLIC KEY-----`,
  jwt_private: `-----BEGIN RSA PRIVATE KEY-----
MIIEpAIBAAKCAQEAkFlPujjgFkcOQRChY7+nP3esMkfEz0hkSN/ZRzRpODe3+aiI
R/i7OGPymVVPwuDT/FElpLEdqBm+1E5FdS7rcZ1Hd7xElavXUdTCOUMyuWX62Jry
c6N6/jsJ1WyMfhOARKo/Q8zrN1PAcqo2hcYhSeGvsUiHqOn8wX+SicjE6mO8v5nM
9kkiz78/3UPg6NCVMPM/u65U0MbUxTYeUmDsLn0zF8gCxpGowJmoSaplnMXrjCOJ
yVf3H6X9DEnmGz/StfNf14yWIVXYqSsKm0/kvg0nEiW7jBaLngVY/p89a91Uw/Sq
sNOvg9WxuUiGViX9VbTJZrlI0yB911YoQKjv2wIDAQABAoIBAFUeJRJFeXYJflFF
sjU0jTWyprqbcWVdZa1HOkNvl2AMExNHmtz9wcB1x1c9ZCQhGT+exhjATCGU1N8y
LGj2OuWq/bqQLM0pIHXjhIfppR6IEQvrCm7ABsWlIJ5WPN4XN7rFvTqIumbMnx2+
Wxo1A+oiB8z9XOlw2JdtV4ah+ePP+3E+uGUHl1ckMB9oe6XYv2wl8l0bbMEMs24G
S4gKnBbKfwh/7/bMG4AdzIsVOwx+KsMVVwf8HBiFb/vBgcyx7EEatbnZ4wS+lOLu
UYYglFKjGLwoSMjtN++Ei9j64lWQdKE6e05HuxpfAWwdoRw5zRkHwWVOHIm2NVdc
N4sCM1ECgYEAxXlEPKunFoCKrsCRA372p/mnjGUVjDfiQOKxsp7J3MEHWtQjQ50E
Mq6Cn81ocW4MIvlN8J0kLV2eTMdIZw0rea1IOlEzlX1T8UU0ShEPgcHeCAa9Y3RL
ujmbP4lE5AwQOnFp6DpkMKccK8xOt4M8A/lBsgwKeqAgxa7WDOFtJwkCgYEAuyFb
Eia9+V87nr29kc6Xsa7llq/3z8FMeLu067+9AQRQXygt0NaFmJh2xyLt18rLkX1x
iTZbSEKL6IQc/0TaFHOFN2TKf84bsECPzJ0GPcY+00QvahVavZf5wPkI2NaGbQDx
ISxceW+nOKa3kasaFb9wYQfJ0G7MjwscYkIblMMCgYEAscbSX6xI6EEgmOJTqsoK
VH61D/eQxoMo9TEguKWrJUnBzUtd0+jvdpEUl7jcZgGke3flatCNWSoG8SgXTm7U
zN3rQFUKE3KYt4SN5oAlbbOSp7cpmPeBlU13LmPt2T/i/DpOFfs7Z3GKMwPjeeJz
jUBAnIGqjWrLFiyoF0B6e8ECgYEAmIJi2rRAeBCpYoJ5EXAyKVnFO75GVUfQr0Ur
+kbWHxII/sScMmvjja4Uf89z0D8zEWwPMCjg1E+H/wRNLa5LngdYNwEqGGc+IbM8
fyIqiAYeBci4a9jjj0lg/2j3UOHlxMjTvJmO9FmPC5i0Wz/7jmXrjOjwDbN/e8Uu
aNY/7EkCgYARNZCnbt0s1/IOANSWGn99SfQoGEUkMv3XM+Wx+wz1N34s0bpcEREA
N3Gci//BfGTYB9CQpiwmXNCRuPt5dL73E7iQ5JSA1dsfsHsiqFKmALdztij3PpiS
4STIKBrx6OhOWabxAou8/+Qlz8O9GNMnHgH6cYBMpNhSV9MGiAiQ0w==
-----END RSA PRIVATE KEY-----`
}

export default CONFIG
