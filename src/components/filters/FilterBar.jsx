import React from 'react'
import styles from './FilterBar.module.css'

const FilterBar = () => {
  return (
    <div className={styles.filterWrapper}>
        <div className={styles.searchWrapper}>
            <input type='text'/>
        </div>
        <div className={styles.categoryWrapper}>
            <select>
                <option value='clothes'/>
                <option value='furnitures'/>
                
            </select>
        </div>
        <div className={styles.ratingWrapper}>
            <select>
                <option value='clothes'/>
                <option value='furnitures'/>
                
            </select>
        </div>
        <div className={styles.minMaxWrapper}>
                minmax
        </div>
        <div className={styles.sortWrapper}>
            sort
        </div>
        <div className={styles.resetWrapper}>
            <button>Reset</button>
        </div>
        
      
    </div>
  )
}

export default FilterBar
