import { useState } from 'react';

import { RequestStatus, ColorPalette } from '../../../types';

type Return = [() => Promise<ColorPalette[]>, RequestStatus];

const request = new Request(
  'https://color-palette-api.kadikraman.now.sh/palettes',
  { method: 'GET' },
);

function useGetPalettes(): Return {
  const [requestStatus, setRequestStatus] = useState({
    isLoading: false,
    err: null,
    data: null,
  });

  async function getPalettes() {
    setRequestStatus({ isLoading: true, err: null, data: null });

    fetch(request)
      .then((response) => response.json())
      .then((data) => {
        setRequestStatus({ isLoading: false, err: null, data });
      })
      .catch((err) => {
        setRequestStatus({ isLoading: false, err, data: null });
      });
  }

  return [getPalettes, requestStatus];
}

export { useGetPalettes };
