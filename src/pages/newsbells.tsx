import Layout from "../components/template/Layout";
import useAppData from "../data/hook/useAppData";

export default function NewsBells () {
  const data = useAppData()

  return (
    <div>
     <Layout title="Bells" subTitle="Here you will manage your notifications">
      <h3>{data.name}</h3>
     </Layout>
    </div>
  )
}