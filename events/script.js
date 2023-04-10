function submitForm() {
  let eventName = $("#eventName").val();
  let eventDate = $("#eventDate").val();
  let eventTier = $("#eventTier").val();
  let theSwitch = $("#theSwitch");
  let captionMax = $("#captionMax");
  let theSwitchEmail = $("#theSwitchEmail");
  let captionMaxEmail = $("#captionMaxEmail");
  let theSwitchTemplate =
    "Subject: FB LA Motor Booking - " +
    eventName +
    "<br> <br> Hi The Switch team,  I would like to make a booking for the " +
    eventName +
    " event please. <br> Program Name: " +
    eventName +
    "<br>Feed: SRT<br>" +
    eventDate +
    " / Window open time 03:00 EST<br>" +
    eventDate +
    " / Window close time 07:00 EST (I am booking longer than needed, will goodnight the feed post event).<br>Source: hlaD05 or 06<br>Destination: FBMOTR02 or 04 <br>Notes:  From FBMOTR02/FBMOTR04 (delete which motor you do not need) I will need this routed via the standard routing below.<br>Route Program from FB Motor 02 to EEG 1 and 2  EEG 1 to CC1, CC3, CC5  EEG 2 to CC2, CC4, CC6  *****OR*****  Route Program from FB Motor 04 to EEG 3 and 4  EEG 3 to CC7, CC9, CC11  EEG 4 to CC8, CC10, CC12<br>This event will not be coming from Murats PO and will need to be invoiced to another internal client. I will bring them into the email chain shortly.<br>Thank you,";

  // The Switch is checked:
  if (theSwitch.is(":checked")) {
    theSwitchEmail.show();
    let newPTag = $("<p>").html(theSwitchTemplate);
    $("#theSwitchEmail").append(newPTag);
    console.log(theSwitchTemplate);
  }
  //   CaptionMax is checked:
  if (captionMax.is(":checked")) {
    captionMaxEmail.show();
  }
}

$(document).ready(function () {
  // Show the switch form and hide the caption form on page load
  $(".switchFormContainer").show();
  $(".captionFormContainer").hide();

  // Show the switch form and hide the caption form when the switch form button is clicked
  $("#switchFormButton").click(function () {
    $(".switchFormContainer").show();
    $(".captionFormContainer").hide();
  });

  // Show the caption form and hide the switch form when the caption form button is clicked
  $("#captionFormButton").click(function () {
    $(".switchFormContainer").hide();
    $(".captionFormContainer").show();
  });
});
