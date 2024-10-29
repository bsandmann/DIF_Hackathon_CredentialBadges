# CredentialBadges
## Submission to the DIF Hackathon 2024
in the Education Track [C.2] by
Björn Sandmann, Germany (sandmann@codedata.solutions)
John Ndigirigi, Kenya (ndigirigi@blocktrust.dev)


# Description
The Credential Badges project enables users to **embed** their **Open Badge 3.0** Verifiable Credentials (VC) directly **into websites** through a simple HTML snippet. Users can paste their credential in JSON or JWT format, select from multiple templates, and generate a snippet to embed on any website or GitHub page. This snippet includes JavaScript that validates the credential.

The project is built with .NET and includes a custom library to support Open Badges 3.0. It currently supports the *did:key* and *did:prism* methods for signature verification. Future plans include adding more templates to support a broader range of Open Badge types, such as diplomas, and collaborating with credential issuers to offer customized HTML snippets.

See the video [here](https://youtu.be/53Ai7W1rDOQ)

# How to test
The application is hosted at [https://badges.blocktrust.dev](https://badges.blocktrust.dev)

We suggest you use the following Credential from DCC for testing.
```json
 {
                                          "@context": [
                                            "https://www.w3.org/2018/credentials/v1",
                                            "https://purl.imsglobal.org/spec/ob/v3p0/context-3.0.1.json",
                                            "https://w3id.org/security/suites/ed25519-2020/v1"
                                          ],
                                          "id": "urn:uuid:cebd27cf-f753-471d-bc2b-b728e51595f3",
                                          "type": [
                                            "VerifiableCredential",
                                            "OpenBadgeCredential"
                                          ],
                                          "name": "DCC Test Credential",
                                          "issuer": {
                                            "type": [
                                              "Profile"
                                            ],
                                            "id": "did:key:z6MkhVTX9BF3NGYX6cc7jWpbNnR7cAjH8LUffabZP8Qu4ysC",
                                            "name": "Digital Credentials Consortium Test Issuer",
                                            "url": "https://dcconsortium.org",
                                            "image": "https://user-images.githubusercontent.com/947005/133544904-29d6139d-2e7b-4fe2-b6e9-7d1022bb6a45.png"
                                          },
                                          "issuanceDate": "2023-08-02T21:19:28.154Z",
                                          "credentialSubject": {
                                            "type": [
                                              "AchievementSubject"
                                            ],
                                            "achievement": {
                                              "id": "urn:uuid:bd6d9316-f7ae-4073-a1e5-2f7f5bd22922",
                                              "type": [
                                                "Achievement"
                                              ],
                                              "achievementType": "Diploma",
                                              "name": "Badge",
                                              "description": "This is a sample credential issued by the Digital Credentials Consortium to demonstrate the functionality of Verifiable Credentials for wallets and verifiers.",
                                              "criteria": {
                                                "type": "Criteria",
                                                "narrative": "This credential was issued to a student that demonstrated proficiency in the Python programming language through activities performed in the course titled *Introduction to Python* offered by [Example Institute of Technology](https://exit.example.edu) from **February 17, 2023** to **June 12, 2023**. This is a credential with the following criteria:\n1. completed all homework assignments\n2. passed all exams\n3. completed final group project"
                                              },
                                              "image": {
                                                "id": "https://user-images.githubusercontent.com/752326/214947713-15826a3a-b5ac-4fba-8d4a-884b60cb7157.png",
                                                "type": "Image"
                                              }
                                            },
                                            "name": "Jane Doe"
                                          },
                                          "expirationDate": "2025-07-26T00:00:00.000Z",
                                          "proof": {
                                            "type": "Ed25519Signature2020",
                                            "created": "2023-08-02T21:19:28Z",
                                            "verificationMethod": "did:key:z6MkhVTX9BF3NGYX6cc7jWpbNnR7cAjH8LUffabZP8Qu4ysC#z6MkhVTX9BF3NGYX6cc7jWpbNnR7cAjH8LUffabZP8Qu4ysC",
                                            "proofPurpose": "assertionMethod",
                                            "proofValue": "z6sVGrHrDE1K8TLSV8qK87GZEpNHH1S3TTi9KhKyKiXCDPtxT2Y2Hs5xX5ZK3McwhHGoGUdoG9tu9vJsLxMDazVC"
                                          }
                                        }
```
The project is still under development and things may break ;)

A sample of a published Credential can be found [here - as in the demo video](https://archfolio.de)

# Related work
This project originated from the Cardano Ecosystem (that's the reason we also support `did:prism`) and the main project can be found [here](https://github.com/bsandmann/blocktrust.CredentialBadges).
This is a purely private project. Blocktrust is not a company and a collection of people working on SSI related problems mostly within the Cardano Ecosystem, but also outside e.g. [Blocktrust Analytics](https://analytics.blocktrust.dev)





