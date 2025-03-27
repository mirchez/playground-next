const Page = async ({ params }: { params: { id: string } }) => {
  // params: native integratios as in react router
  const { id } = await params;

  return <div className="text-3xl">USER ID: {id}</div>;
};

export default Page;
