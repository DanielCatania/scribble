import { GetStaticPaths, GetStaticProps } from "next";

// ***In the future, this data will be in an external location***
const content = {
  en: {
    pageName: "Login",
    fields: {
      email: "E-mail",
      password: "Password",
    },
  },
  "pt-br": {
    pageName: "Entrar",
    fields: {
      email: "E-mail",
      password: "Senha",
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

export { default } from "@/screens/login/";
