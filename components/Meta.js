import Head from "next/head";

const Meta = () => {
  return (
    <Head>
      <title>Amazon Clone </title>
      <meta name="description" content="Amazon Clone" />
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <link rel="icon" href="/favicon.ico" />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
        integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
        crossorigin="anonymous"
      />
      <link rel="stylesheet" href="globals.css"></link>
    </Head>
  );
};

export default Meta;
