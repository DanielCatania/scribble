import type { GetServerSideProps } from "next";

export interface PageContent {
  header: {
    login: string;
    signUp: string;
  };
  title: string;
  description: string;
  call: string;
  buttonCall: string;
}

// ***In the future, this data will be in an external location***
const content = {
  en: {
    header: {
      login: "Login",
      signUp: "Sign Up",
    },
    title: "Scribble is an enabler.",
    description:
      "Our mission is to facilitate your notes, help you organize your projects, goals...",
    call: "Try the most diverse functions for your organization.",
    buttonCall: "Use Scribble",
  },
  "pt-br": {
    header: {
      login: "Entrar",
      signUp: "Criar",
    },
    title: "Scribble é um auxiliar.",
    description:
      "Nossa missão é auxiliar suas anotações, te ajudar a organizar seus projetos, metas...",
    call: "Experimente as mais diversas funções para sua organização.",
    buttonCall: "Usar Scribble",
  },
};

export const getServerSideProps = (async (ctx) => {
  const { idiom } = ctx.params;

  if (idiom === "pt-br" || idiom === "en") {
    return { props: { content: content[idiom] } };
  } else {
    return {
      props: {},
      redirect: {
        permanent: false,
        destination: "/",
      },
    };
  }
}) satisfies GetServerSideProps<{
  content: PageContent;
}>;

export { default } from "@/screens/home/";
