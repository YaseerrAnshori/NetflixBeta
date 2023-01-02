import Authenticated from "@/Layouts/Authenticated/Index";
import SubscriptionCard from "@/Components/SubscriptionCard";
import { Inertia } from "@inertiajs/inertia";

export default function SubscriptionPlan({auth,subscriptionPlans}) {

    const selectSubcription = id => {
        Inertia.post(route('user.dashboard.subscriptionPlan.userSubscribe',{
            subscriptionPlan: id
        }));
    }



    return (
        <Authenticated auth={auth}>
            <div className="py-20 flex flex-col items-center">
                <div className="text-black font-semibold text-[26px] mb-3">
                    Pricing for Everyone
                </div>
                <p className="text-base text-gray-1 leading-7 max-w-[302px] text-center">
                    Invest your little money to get a whole new experiences from
                    movies.
                </p>

                {/* <!-- Pricing Card --> */}
                <div className="flex justify-center gap-10 mt-[70px]">
                    {/* <!-- Basic --> */}

                    {subscriptionPlans.map((subscriptionPlan)=> (
                        <SubscriptionCard
                            key={subscriptionPlan.id}
                            name={subscriptionPlan.name}
                            price={subscriptionPlan.price}
                            durationinMonth={subscriptionPlan.active_period_in_months }
                            features={JSON.parse(subscriptionPlan.features)}
                            isPremium={subscriptionPlan.name === 'Premium'}
                            onSelectSubscription={() => selectSubcription(subscriptionPlan.id)}
                        />
                    ))}
                </div>
                {/* <!-- /Pricing Card --> */}
            </div>
        </Authenticated>
    );
}


