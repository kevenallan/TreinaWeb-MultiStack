import SafeEnvironment from 'ui/components/feedback/SafeEnvironment/SafeEnvironment';
import PageTitle from 'ui/components/data-display/PagetTitle/PageTitle';
import UserInformation from 'ui/components/data-display/UserInformation/UserInformation';

export default function Home() {
  return (
    <div>
      <SafeEnvironment />
      <PageTitle
        title={"Conheça os profissionais"}
        subtitle={
          "Preencha seu endereço e veja todos os profissionais da sua ocalidade"
        }
      />
      <UserInformation
        name={"LadyBug"}
        picture={"https://github.com/imbruh.png"}
        rating={5}
        description={"João Pessoa"}
      />

      <UserInformation
        name={"Keven Allan"}
        picture={"https://github.com/kevenalla.png"}
        rating={4}
        description={"João Pessoa"}
      />
    </div>
  );
}
