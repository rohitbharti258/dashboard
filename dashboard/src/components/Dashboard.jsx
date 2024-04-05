import React from 'react'
import DashBoardStats from './DashBoardStats'
import TransactionChart from './TransactionChart'
import BuyerProfileChart from './BuyerProfileChart'
import RecentOrders from './RecentOrders'
import PopularProducts from './PopularProducts'
const Dashboard = () => {
  return (
    <div className="flex flex-col gap-4">
			<DashBoardStats/>
			<div className="flex flex-row gap-4 w-full">
				<TransactionChart />
				<BuyerProfileChart />
			</div>
			<div className="flex flex-row gap-4 w-full">
				<RecentOrders />
				<PopularProducts />
			</div>
		</div>

  )
}

export default Dashboard