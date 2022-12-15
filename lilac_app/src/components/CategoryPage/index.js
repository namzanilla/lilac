import React from 'react'
import styled from 'styled-components'
import { Helmet } from 'react-helmet'

import ProductsItem from './ProductsItem'

export default function CategoryPage() {
  return (
    <>
      <Helmet>
        <title>Category Page</title>
      </Helmet>
      <Wrap>
        <h1>Category H1</h1>
        <Items>
          {arImgSrc.map((imgSrc, ix) => {
            return (
              <ProductsItem
                key={ix}
                inCart={ix % 2}
                imgSrc={imgSrc}
                productName="Product Name"
                price="13 400"
                currency="грн"
              />
            )
          })}
        </Items>
      </Wrap>
    </>
  )
}

const arImgSrc = [
  '/images/gold-kruzer-1.jpg',
  '/images/invenio-1.jpg',
  '/images/invenio-pro-1.jpg',
  '/images/nokta-makro-anfibio-multi-metal-detector-1.jpg',
  '/images/nokta-makro-gold-finder-2000-1.jpg',
  '/images/nokta-makro-impact-metal-detector-1.jpg',
  '/images/nokta-makro-midi-hoard-kids-detector-1.jpg',
  '/images/nokta-makro-mini-hoard-kids-detector-1.jpg',
  '/images/nokta-makro-pulsedive-scuba-detector-yellow-1.jpg',
  '/images/nokta-makro-pulsedive-scuba-yellow-1.jpg',
  '/images/nokta-makro-simplex-metal-detector-1.jpg',
  '/images/nokta-makro-the-legend-1.jpg',
].reverse()

const Wrap = styled.div`
  padding: 0 16px 0;
`

const Items = styled.div`
  max-width: 1920px;
  margin: 0 auto;
  display: grid;
  grid-gap: 16px;
  @media (max-width: 959px) {
    grid-template-columns: repeat(2, 1fr);
    > div {
      :last-child:nth-child(odd) {
        transform: translateX(calc(50% + 8px));
      }
    }
  }
  @media (min-width: 960px) {
    grid-template-columns: repeat(3, 1fr);
  }
`
