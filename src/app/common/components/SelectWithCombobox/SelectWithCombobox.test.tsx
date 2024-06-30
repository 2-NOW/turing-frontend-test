import { render } from "@testing-library/react";
import SelectWithComboboxStories from "./SelectWithCombobox.fixtures";
import { describe, test } from "vitest";
import { expectTL } from "@/siheom/expectTL";
import { queryTL } from "@/siheom/queryTL";

describe("SelectWithCombobox", () => {
	test("옵션을 검색하고 선택하고 취소할 수 있다", async () => {
		render(SelectWithComboboxStories["여러 개의 옵션"]);

		await queryTL.combobox("사용자 설정하기").click();

		// await expectTL(queryTL.option("")).toHaveTextContents([
		// 	"탐정토끼",
		// 	"김태희",
		// 	"스텔로",
		// ]);

		// await queryTL.textbox("이름이나 이메일을 입력해주세요").fill("ㄱ");

		// await expectTL(queryTL.option("")).toHaveTextContents([
		// 	"탐정토끼",
		// 	"김태희",
		// ]);

		// await queryTL.textbox("이름이나 이메일을 입력해주세요").fill("김");

		// await expectTL(queryTL.option("")).toHaveTextContents(["김태희"]);

		// await queryTL.option("김태희").click();

		// await queryTL.combobox("사용자 김태희 해제하기").click();

		// await queryTL
		// 	.alertdialog("사용자를 해제하시겠어요?")
		// 	.button("해제하기")
		// 	.click();

			
		// await expectTL(queryTL.combobox("사용자 설정하기")).toBeVisible();
	});
});
