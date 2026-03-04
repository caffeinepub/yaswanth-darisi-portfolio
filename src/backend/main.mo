import List "mo:core/List";

actor {
  type ContactMessage = {
    name : Text;
    email : Text;
    message : Text;
  };

  let messages = List.empty<ContactMessage>();

  public shared ({ caller }) func submitMessage(name : Text, email : Text, message : Text) : async () {
    messages.add({ name; email; message });
  };

  public query ({ caller }) func getAllMessages() : async [ContactMessage] {
    messages.toArray();
  };
};
