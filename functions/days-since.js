exports.handler = async (event, context) => {
  const startDate = new Date(2023, 2, 21);
  const today = new Date();

  const daysSince = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));

  return {
    statusCode: 200,
    body: daysSince.toString()
  };
};