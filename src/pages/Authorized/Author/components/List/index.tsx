import React from 'react';
import { FiEdit } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { ListAuthors, ItemAuthor, HeaderAuthor, Name } from './styled';

import { ListProps } from './interface';

const List: React.FC<ListProps> = ({ list }) => {
  return (
    <ListAuthors>
      {list &&
        list.map(({ authorId, lastName, firstName }) => (
          <ItemAuthor key={authorId}>
            <HeaderAuthor>
              <Name>
                {firstName} {lastName}
              </Name>
              <Link
                to={`/author/update/${authorId}`}
                title={`Editar dados de ${firstName} ${lastName}`}
              >
                <FiEdit />
              </Link>
            </HeaderAuthor>
          </ItemAuthor>
        ))}
    </ListAuthors>
  );
};

export default List;
