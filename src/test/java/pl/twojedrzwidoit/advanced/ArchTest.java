package pl.twojedrzwidoit.advanced;

import static com.tngtech.archunit.lang.syntax.ArchRuleDefinition.noClasses;

import com.tngtech.archunit.core.domain.JavaClasses;
import com.tngtech.archunit.core.importer.ClassFileImporter;
import com.tngtech.archunit.core.importer.ImportOption;
import org.junit.jupiter.api.Test;

class ArchTest {

    @Test
    void servicesAndRepositoriesShouldNotDependOnWebLayer() {
        JavaClasses importedClasses = new ClassFileImporter()
            .withImportOption(ImportOption.Predefined.DO_NOT_INCLUDE_TESTS)
            .importPackages("pl.twojedrzwidoit.advanced");

        noClasses()
            .that()
            .resideInAnyPackage("pl.twojedrzwidoit.advanced.service..")
            .or()
            .resideInAnyPackage("pl.twojedrzwidoit.advanced.repository..")
            .should()
            .dependOnClassesThat()
            .resideInAnyPackage("..pl.twojedrzwidoit.advanced.web..")
            .because("Services and repositories should not depend on web layer")
            .check(importedClasses);
    }
}
