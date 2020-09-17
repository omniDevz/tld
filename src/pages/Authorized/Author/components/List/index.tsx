import React from 'react';
import { FiEdit } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { ListAuthors, ItemAuthor, HeaderAuthor, Name } from './styled';

import { ListProps } from './interface';

const List: React.FC<ListProps> = ({ list }) => {
  return (
    <ListAuthors>
      {list &&
        list.map(({ authorId, lastname, firstname, inactive }) => (
          <ItemAuthor key={authorId}>
            <HeaderAuthor>
              <Name>
                {firstname} {lastname}
              </Name>
              <Link
                to={`/authorized/author/update/${authorId}`}
                title={`Editar dados de ${firstname} ${lastname}`}
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
