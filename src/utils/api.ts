export const getExplore = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/b/4G1G`);
    const exploredData = await res.json();
    return exploredData;
  } catch (error) {
    console.log(error);
  }
};
