import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import Image from './Image';
import CardBody from './CardBody';


export default function CardsList({items}) {
  const listItems = items.map((o, index) => (
    <Card key={index}>
      {o.image ? <Image src={o.image.src} alt={o.image.alt} /> : null}
      <CardBody title={o.title} text={o.text} url={o.url} btnText={o.btnText} />
    </Card>
  ))

  return (
    <div className="cards">
      {listItems}
    </div>
  )
}

CardsList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object)
}