# (Nie) Techniczny PM II - WarsztatSamochodowy (przykładowy projekt)

## Development

Aplikacja do uruchomienia wymaga minimum Node.js w wersji 11 oraz Javy w wersji 1.8. Instalacje należy rozpocząć poprzez odpalenie komendy

```
npm install
```
a następnie 
```
./gradlew -x webapp
npm start
```

### Budowanie paczki produkcyjnej 

Paczka produkcyjna budowana jest za pomocą komendy

```
./gradlew -Pprod clean bootJar
```

Żeby sprawdzić czy wszystko działa, należy użyć nastepującej komendy

```
java -jar build/libs/*.jar
```

a następnie odpalić adres [http://localhost:8080](http://localhost:8080) w przeglądarce.

## Testowanie

Żeby przetestować aplikację (wraz z raportem pokrycia testami), odpal komendę:

```
./gradlew test integrationTest jacocoTestReport
```

### Klienckie Testy

Testy jednostkowe frontendu używają [Jest][]. Znajdują się w [src/test/javascript/](src/test/javascript/) i mogą zostać uruchomione poprzez komendę:

```
npm test
```

Testy E2E UI end-to-end używają [Cypress][]. Znajdują się w [src/test/javascript/cypress](src/test/javascript/cypress)
i mogą zostać uruchomione poprzez uruchomienie aplikacji komendą (`./gradlew bootRun`) a następnie (`npm run e2e`).

Testy wydajnościowe używają [Gatling][], są napisane w Scali i znajdują się w katalogu [src/test/gatling](src/test/gatling).

### Jakość kodu

Projekt posiada zintegrowane narzędzie Sonar. Możesz odpalić lokalny serwer Sonar (http://localhost:9001) dzięki Dockerowi:

```
docker-compose -f src/main/docker/sonar.yml up -d
```

Następnie, uruchom komendę

```
./gradlew -Pprod clean check jacocoTestReport sonarqube
```
