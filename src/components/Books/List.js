import React, { Component, PropTypes } from 'react'
import { List, fromJS } from 'immutable'
import styles from './Books.css'

/**
 * List of search results
 */
export default class BookList extends Component {
  static displayName = 'List'

  static propTypes = {
    /**
     * Array of books (`List`)
     */
    items: PropTypes.instanceOf(List)
  }

  static styleguide = {
    category: 'Books',
    index: '2.2',
    title: 'List',
    exampleComponent: BookList,
    examples: [
      {
        tabTitle: 'Multiple Items',
        props: {
          items: fromJS([
            {
              id: 1,
              volumeInfo: {
                title: 'Book A'
              }
            },
            {
              id: 2,
              volumeInfo: {
                title: 'Book B'
              }
            }
          ])
        }
      },
      {
        tabTitle: 'Empty',
        props: {
          items: List([])
        }
      }
    ]
  }

  render() {
    const { items } = this.props
    return (
      <div>
        {(items || []).map(book => {
          return (
            <p className={styles.listItem} key={book.get('id')}>{book.get('volumeInfo').get('title')}</p>
          )
        })}
      </div>
    )
  }
}
