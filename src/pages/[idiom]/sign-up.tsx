import { GetStaticPaths, GetStaticProps } from "next";

// ***In the future, this data will be in an external location***
const content = {
  en: {
    pageName: "Sign Up",
    fields: {
      name: "Full name",
      email: "E-mail",
      password: "Password",
      confirm: "Confirm Password",
    },
  },
  "pt-br": {
    pageName: "Criar Conta",
    fields: {
      name: "Nome Completo",
      email: "E-mail",
      password: "Senha",
      confirm: "Confirmar Senha",
    },
  },
};

export const getStaticPaths = (async () => {
  return {
    paths: [
      {
        params: {
          idiom: "en",
        },
      },
      {
        params: {
          idiom: "pt-br",
        },
      },
    ],
    fallback: false,
  };
}) satisfies GetStaticPaths;

export const getStaticProps = (async (ctx) => {
  const { idiom } = ctx.params;

  if (idiom === "pt-br" || idiom === "en") {
    return { props: { content: content[idiom] } };
  }
}) satisfies GetStaticProps;

export { default } from "@/screens/sign-up/";
