import { useSearchParams } from 'react-router-dom';
export const DetailsOther = () => {
  const [searchParams] = useSearchParams();
  console.log(
    '🚀 ~ file: DetailsOther.tsx:4 ~ DetailsOther ~ searchParams:',
    searchParams
  );
  const id = searchParams.get('id');
  console.log('🚀 ~ file: DetailsOther.tsx:9 ~ DetailsOther ~ id:', id);
  const params = {};
  for (const [key, value] of searchParams.entries()) {
    params[key] = value;
  }
  console.log(params);
  // 或者
  const query = {};
  searchParams.forEach((value, key) => {
    query[key] = value;
  });

  console.log(query); // { page: 5, pageSize: 25 }
  return (
    <div>
      <span>参数的值：{id}</span>
    </div>
  );
};
