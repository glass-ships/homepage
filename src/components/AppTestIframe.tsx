import { useEffect } from "react";

import AppButton from "./AppButton";

export default function TestIframe() {
  useEffect(() => {
    const iframe = document.querySelector("iframe");
    if (!iframe) {
      console.log("no iframe");
    } else {
      console.log("iframe found");
      iframe.contentWindow?.postMessage(
        {
          subjects: ["MP:0010771", "MP:0002169", "MP:0005391", "MP:0005389", "MP:0005367"],
          "object-sets": [
            {
              id: "SET:000001",
              label: "Test set",
              phenotypes: ["MP:0010771", "MP:0002169", "MP:0005391", "MP:0005389", "MP:0005367"],
            },
          ],
          metric: "jaccard_similarity",
        },
        "*"
      );
    }
    window.addEventListener("message", (event) => {
      const { name, width, height } = event.data;
      if (!iframe) return;
      // recommended styling...
      // let iframe fill its container
      iframe.style.width = "100%";
      iframe.style.height = "1000px";
      // but never bigger than its contents
      iframe.style.maxWidth = width + "px";
      iframe.style.maxHeight = height + "px";
      // contents will wrap/scroll appropriately at smaller sizes
    });
  }, []);

  return (
    <div>
      <iframe
        name="pheno-multi"
        title="MultiCompare Phenogrid"
        src="http://monarchinitiative.org/phenogrid-multi-compare?subjects=HP:0002616,HP:0001763,HP:0004944,HP:0010749,HP:0001533,HP:0002020,HP:0012450&object-sets=HP:0002616,HP:0001763,HP:0000767,HP:0000023,HP:0002108,HP:0000490,HP:0000545,HP:0100785,HP:0000268&object-sets=HP:0002616,HP:0001763,HP:0004944,HP:0010749,HP:0001533,HP:0002020,HP:0012450,HP:0003394,HP:0003771,HP:0012378,HP:0001278,HP:0002827,HP:0002829,HP:0002999,HP:0003010&object-sets=HP:0002616,HP:0001763,HP:0000767,HP:0000023,HP:0002108,HP:0000490,HP:0000545,HP:0100785,HP:0000268,HP:0001634,HP:0001653,HP:0001659,HP:0002360,HP:0003179,HP:0004970,HP:0005059,HP:0002705,HP:0012432,HP:0007800,HP:0001704&metric=phenodigm_score"
      ></iframe>

      <AppButton text="Test" onClick={postIframe} />
    </div>
  );
}

const postIframe = () => {
  const iframe = document.querySelector<HTMLIFrameElement>("iframe[name=pheno-multi]");
  if (!iframe) {
    console.log("no iframe");
    return;
  }
  iframe.contentWindow?.postMessage(
    {
      subjects: ["MP:0010771", "MP:0002169", "MP:0005391", "MP:0005389", "MP:0005367"],
      "object-sets": [
        {
          id: "SET:000001",
          label: "Test set",
          phenotypes: ["MP:0010771", "MP:0002169", "MP:0005391", "MP:0005389", "MP:0005367"],
        },
      ],
      metric: "jaccard_similarity",
    },
    "*"
  );
};
