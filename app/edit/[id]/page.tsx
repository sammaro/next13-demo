import NewPage from "@/app/new/page";

type Props = {
  id: string;
}


const EditPage = ({ params }: { params: Props }) => {
  const id = params.id;
  return (
    <div>EditPage: {id}</div>
  )
}

export default NewPage;