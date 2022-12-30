import { useRouter } from 'next/router';

export default function Note() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      <h1>
        Note -
        {' '}
        {id}
      </h1>
    </div>
  );
}
