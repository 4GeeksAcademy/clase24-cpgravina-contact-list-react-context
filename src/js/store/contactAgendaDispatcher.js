export const ContactAgendaDispatcher = async () => {
  const PATH = "/agendas/cpgravina";
  fetch(`${process.env.BACKEND_URL}${PATH}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({})
  })
  .then(resp => resp.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.log(error);
  })}