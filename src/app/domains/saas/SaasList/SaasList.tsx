import { SaasListItem } from "./SaasListItem";

export const SaasList = ({
	saasList,
}: {
	saasList: { id: string; name: string; logoUrl?: string; lastPaidAt?: Date }[];
}) => {
	return (
		<ul aria-label="SaaS 목록">
			{saasList.map((saas) => (
				<SaasListItem key={saas.id} saas={saas} />
			))}
		</ul>
	);
};
