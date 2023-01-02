<?php

namespace Database\Seeders;

use App\Models\SubscriptionPlan;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SubscriptionPlanTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $subsciptionPlans = [
            [
                'name' => 'Basic',
                'price' => 20000,
                'active_period_in_months' => 3,
                'features' => json_encode(['features 1','features 2'])
            ],
            [
                'name' => 'Premium',
                'price' => 90000,
                'active_period_in_months' => 6,
                'features' => json_encode(['features 1','features 2','features 3','features 4'])
            ]
        ];

        SubscriptionPlan::insert($subsciptionPlans);
    }
}
