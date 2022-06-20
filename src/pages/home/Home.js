import styles from './Home.module.css'
import { useCollection } from '../../hooks/useCollection'

import React from 'react'
import TransactionForm from './TransactionForm'
import TransactionList from './TransactionList'
import { useAuthContext } from '../../hooks/useAuthContext'

export default function Home() {
  const { user } = useAuthContext()
  const { documents, error } = useCollection('transactions')
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {error && <p>{error}</p>}
        {documents && <TransactionList transactions={documents} />}
      </div>
      <div className={styles.sidebar}>
        <TransactionForm uid={user.uid} />
      </div>
    </div>
  )
}
