import MemberCard from '../../components/MemberCard';
import { MembersData } from '../../components/MemberCard/MembersData';
import Layout from '../../components/Layout/Layout';

export const getStaticPaths = async () => {
  const paths = MembersData.map(item => {
    return {
      params: { slug: item.registration }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async (context) => {
  const slug = context.params.slug;
  const data = MembersData.filter(item => item.registration == slug);

  return {
    props: { member: data[0] }
  }
}

export default function RecipeDetails({ member }) {
  return (
    <Layout>
      <MemberCard member={member} />
    </Layout>
  )
}
