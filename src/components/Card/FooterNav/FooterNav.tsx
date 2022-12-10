export default function FooterNav({ id, ids, isSelected, allData }: any) {
  let actualID = ids.indexOf(id);
  //da la posición de la carta actual en el array ids
  const prevID = actualID - 1 < 0 ? ids[ids.length - 1] : ids[actualID - 1];
  const nextID = actualID + 1 > ids.length - 1 ? ids[0] : ids[actualID + 1];

  const prevPath = allData.find(
    (project: { id: any }) => project.id === prevID
  ).path;
  const nextPath = allData.find(
    (project: { id: any }) => project.id === nextID
  ).path;

  return <>{isSelected}</>;
}
