import { Component, OnInit, Input } from "@angular/core";
import { AggregatedData } from "src/app/core/models/aggregated-data.model";

@Component({
  selector: "gla-technical-debt-details-aggregated-item",
  templateUrl: "./technical-debt-details-aggregated-item.component.html",
  styleUrls: ["./technical-debt-details-aggregated-item.component.scss"],
})
export class TechnicalDebtDetailsAggregatedItemComponent implements OnInit {
  @Input() data: AggregatedData;

  ngOnInit() {}
}
