import React, { useEffect, useState } from 'react';

import { useRouter } from 'next/router';
import axios from 'axios';

import styled from 'styled-components';

const ComicDetailContainer = styled.div``;

const ComicDetail = () => {
  const router = useRouter();
  const { id = '' } = router.query;

  const [comic, setComic] = useState();

  useEffect(() => {
    if (!comic) {
      return axios
        .get(
          `https://gateway.marvel.com:443/v1/public/comics/${id}?ts=1&apikey=6c915ef1dcee8a56cc163a02592aad2d&hash=a85ef61e3494356c56e955d2ac0974f0`
        )
        .then((res) => {
          setComic(res?.data?.data);
        });
    }
  }, []);
  return (
    <ComicDetailContainer>
      <iframe
        src={comic?.results?.[0]?.urls?.[0]?.url}
        style={{ width: '100vw', height: '100vh' }}
      ></iframe>
    </ComicDetailContainer>
  );
};

export default ComicDetail;
