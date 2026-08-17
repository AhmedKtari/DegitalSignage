package io.github.ahmedktarii.degitalesingage.Entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.sql.Timestamp;

@Entity
@Table(name = "sign")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Sign {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(unique = true)
    private String signCode;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "owner_id", nullable = false)
    private User owner;

    @Column(nullable = false, length = 25 )
    private String title;

    @Column(length = 255 )
    private String Description;

    // Random token used in the public URL ;
    @Column(nullable = false, unique = true, length = 255)
    private String slug;

    // Online | Offline | disabled ;
    @Enumerated(EnumType.STRING)
    private signStatus status;

    @Column(nullable = false, length = 255)
    private String type;

    @Column(name = "created_at", updatable = false)
    private Timestamp createdAt;
}